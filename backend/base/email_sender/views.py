from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings


class EmailSender(APIView):
    def post(self, request):
        recipient = request.data.get('recipient', '')
        subject = request.data.get('subject', '')
        message = request.data.get('message', '')

        if recipient and subject and message:
            try:
                # Send email
                send_mail(subject, message, settings.EMAIL_HOST_USER, [recipient])
                return Response({'message': 'Email sent successfully!'}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({'error': 'Invalid input'}, status=status.HTTP_400_BAD_REQUEST)
        

class SubscribeToNewsletter(APIView):

    def post(self, request):
            email = request.data.get('email')

            if not email:
                return Response({'error': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)

            try:
                send_mail(
                    subject='Thanks for subscribing to our newsletter',
                    message='We appreciate your interest in our newsletter!',
                    from_email=settings.EMAIL_HOST_USER,
                    recipient_list=[email],
                    fail_silently=False,
                )
                return Response({'message': 'Subscription successful.'}, status=status.HTTP_200_OK)
            except Exception as ex:
                return Response({'error': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                
