from django.urls import path
from .views import (
    ReviewListView,
    ReviewCreateView,
    ReviewDeleteView,
    ReviewProductListView,
    ReviewProductDetailView,
    ReviewProductCreateView,
    ReviewProductDeleteView,
)

urlpatterns = [
    # reviews
    path("list/", ReviewListView.as_view(), name="review-list"),
    path("create/", ReviewCreateView.as_view(), name="review-create"),
    path("delete/<str:id>/", ReviewDeleteView.as_view(), name="review-delete"),
    # reviews products
    path("product/list/", ReviewProductListView.as_view(), name="review-list"),
    path(
        "product/detail/<str:id>/",
        ReviewProductDetailView.as_view(),
        name="review-detail",
    ),
    path("product/create/", ReviewProductCreateView.as_view(), name="review-create"),
    path(
        "product/delete/<str:id>/",
        ReviewProductDeleteView.as_view(),
        name="review-delete",
    ),
]
