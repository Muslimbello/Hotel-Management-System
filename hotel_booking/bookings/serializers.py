from rest_framework import serializers
from yourappname.models import User  # Import your custom User model
from django.contrib.auth.password_validation import validate_password


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)  # Use email instead of username
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )

    class Meta:
        model = User  # Reference your custom User model
        fields = ("email", "password")  # No 'confirm_password' field

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data["email"],  # Create user with email
        )
        user.set_password(validated_data["password"])  # Set password securely
        user.save()
        return user
