from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import HotelListCreateView, HotelRetrieveUpdateDestroyView

urlpatterns = [
    path('hotels/', HotelListCreateView.as_view(), name='hotel-list-create'),
    path('hotels/<int:pk>/', HotelRetrieveUpdateDestroyView.as_view(), name='hotel-detail'),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
