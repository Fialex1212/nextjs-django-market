from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializers, UserUpdateSerializers
from rest_framework import generics
from .models import CustomUser, EmailVerification
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from django.utils.timezone import now
from datetime import timedelta
from django.conf import settings
import random
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny

class RegisterView(APIView):

    def post(self, request):
        fullname = request.data.get("fullname")
        email = request.data.get("email")
        password = request.data.get("password")
        
        if not fullname or not email or not password:
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        verification_code = random.randint(100000, 999999)
        
        EmailVerification.objects.update_or_create(
            email=email,
            defaults={
                'code': verification_code,
                'expires_at': now() + timedelta(minutes=3)
            }
        )
        
        send_mail(
                'Verify your email',
                f'Your verification code is {verification_code}',
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False,
            )
        
        return Response({'message': 'Verification email sent. Please check your email.'}, status=status.HTTP_200_OK)

class VerifyEmailView(APIView):

    def post(self, request):
        fullname = request.data.get("fullname")
        email = request.data.get("email")
        code = request.data.get("code")
        
        if not email or not code:
            return Response({'error': 'Email and code are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            verification = EmailVerification.objects.get(email=email)
        except EmailVerification.DoesNotExist:
            return Response({'error': 'Verification code not found.'}, status=status.HTTP_404_NOT_FOUND)

        if verification.is_expired():
            return Response({'error': 'Verification code expired.'}, status=status.HTTP_400_BAD_REQUEST)

        if verification.code != code:
            return Response({'error': 'Invalid verification code.'}, status=status.HTTP_400_BAD_REQUEST)

        CustomUser.objects.create_user(email=email, fullname=fullname, password=request.data.get('password'))
        verification.delete() 

        return Response({'message': 'Email verified. User created successfully.'}, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(request, email=email, password=password)

        if user is None:
            print(f"Authentication failed for email: {email}")
            return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)


        refresh = RefreshToken.for_user(user)
        access = refresh.access_token

        response = Response({
            'message': 'Login successful.',
            'user': {
                'id': user.id,
                'fullname': user.fullname,
                'email': user.email,
            }
        }, status=status.HTTP_200_OK)
        response.set_cookie('refresh_token', str(refresh), httponly=True, samesite='Lax')
        response.set_cookie('access_token', str(access), httponly=True, samesite='Lax')

        return response
        

class LogoutView(APIView):
    def post(self, request):
        response = Response({'message': 'Logout successful.'}, status=status.HTTP_200_OK)
        response.delete_cookie('refresh_token')
        response.delete_cookie('access_token')
        return response
    

class UserListCreateView(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializers
    
class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializers
    lookup_field = 'id'
    
class UserUpdateView(generics.UpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserUpdateSerializers
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        return self.request.user