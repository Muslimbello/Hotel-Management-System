from rest_framework import serializers
from app_auth.models import User  # Import your custom User model
from django.contrib.auth.password_validation import validate_password


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)  # Email for login
    username = serializers.CharField(required=True)  # Username field
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )

    class Meta:
        model = User  # Reference your custom User model
        fields = ("username", "email", "password")  # Include username

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data["username"],  # Save username
            email=validated_data["email"],  # Save email
        )
        user.set_password(validated_data["password"])  # Set password securely
        user.save()
        return user
