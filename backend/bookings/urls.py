from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import HotelListCreateView, HotelRetrieveUpdateDestroyView

urlpatterns = [
    path("clients/", HotelListCreateView.as_view(), name="hotel-list-create"),
    path(
        "client/<int:pk>/",
        HotelRetrieveUpdateDestroyView.as_view(),
        name="hotel-detail",
    ),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
