from rest_framework import serializers
from yourappname.models import User  # Import your custom User model
from django.contrib.auth.password_validation import validate_password


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)  # Use email instead of username
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    # confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User  # Reference your custom User model
        fields = (
            "email",
            "password",
        )  # Use email field

    # def validate(self, attrs):
    #     if attrs["password"] != attrs["confirm_password"]:
    #         raise serializers.ValidationError(
    #             {"password": "Password fields didn't match."}
    #         )
    #     return attrs

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data["email"],  # Create user with email
        )
        user.set_password(validated_data["password"])  # Set password
        user.save()
        return user
