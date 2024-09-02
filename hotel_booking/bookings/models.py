from django.db import models
class Hotel(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    image = models.ImageField(upload_to='hotel_images/', null=True, blank=True)

    def __str__(self):
        return self.name
