from django.urls import path
from .views import (
    RegisterView,
    VerifyEmailView,
    LoginView,
    LogoutView,

    UserListCreateView, 
    UserDetailView, 
    UserUpdateView
)

urlpatterns = [
    #Sign-up/Sign-in
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('register/', RegisterView.as_view(), name='register'),
    path('register/verify/', VerifyEmailView.as_view(), name="verify_email"),

    #User info
    path('list/', UserListCreateView.as_view(), name='get_users'),
    path('user/<str:id>/', UserDetailView.as_view(), name='get_user'),
    path('user/update/', UserUpdateView.as_view(), name='update_user')
]