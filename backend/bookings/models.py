from django.db import models
from django.core.validators import RegexValidator


class Hotel(models.Model):
    phone_regex = RegexValidator(
        regex=r"^\+\d{1,3}\d{10}$",
        message="Phone number must be entered in the format: '+9991234567890'. Country code must be 1-3 digits followed by a 10-digit number.",
    )
    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female"),
    ]
    ROOM_TYPE = [
        ("S", "Single"),
        ("F", "Family"),
    ]
    ROOM_NUMBER = [(i, str(i)) for i in range(1, 11)]
    name = models.CharField(max_length=100, blank=False)
    Address = models.CharField(max_length=225)
    # city = models.CharField(max_length=225)
    phone = models.CharField(validators=[phone_regex], max_length=15, blank=False)
    room_num = models.IntegerField(choices=ROOM_NUMBER)
    room_type = models.CharField(max_length=100)
    # gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    created_at = models.DateField(auto_now_add=True, db_index=True)
    updated_at = models.DateField(auto_now=True)
    # image = models.ImageField(upload_to="hotel_images/", null=True, blank=True)

    def __str__(self):
        return self.name
