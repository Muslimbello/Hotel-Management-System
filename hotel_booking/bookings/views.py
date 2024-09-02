from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Hotel
from .serializers import HotelSerializer

class HotelListCreateView(generics.ListCreateAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

class HotelRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
