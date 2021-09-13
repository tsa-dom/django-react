FROM node:16-alpine as build

WORKDIR /

COPY . .

WORKDIR /frontend
RUN npm ci --production
RUN npm run build
RUN npm run transfer

FROM python:3
COPY --from=build /backend /

WORKDIR /

RUN pip install -r requirements.txt

WORKDIR /app

RUN python manage.py collectstatic --no-input

ENV PYTHONUNBUFFERED=1

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]