from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings

# DRF API View for sending email
class EmailSender(APIView):
    def post(self, request):
        # Extract data from the request
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
