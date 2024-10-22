from django.urls import path
from .views import EmailSender

urlpatterns = [
    path('send-email/', EmailSender.as_view(), name='send_email'),
]
