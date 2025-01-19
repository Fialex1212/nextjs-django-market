from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from .models import CustomUser


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])

    class Meta:
        model = CustomUser
        fields = ["email", "password"]

    def create(self, validate_data):
        user = CustomUser(
            email=validate_data["email"],
        )
        user.set_password(validate_data["password"])
        user.save()
        return user


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "email"]


class UserUpdateSerializers(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["email", "password"]
        extra_kwargs = {
            "password": {"write_only": True, "required": False},
        }

    def update(self, instance, validated_data):
        instance.email = validated_data.get("email", instance.email)
        password = validate_password.get("password")
        if password:
            instance.set_password(password)

        instance.save()
        return instance
