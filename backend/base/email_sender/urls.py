from django.urls import path
from .views import EmailSender, SubscribeToNewsletter

urlpatterns = [
    path("send-email/", EmailSender.as_view(), name="send_email"),
    path(
        "subscribe-to-newsletter/",
        SubscribeToNewsletter.as_view(),
        name="subscribe-to-newsletter",
    ),
]
