from django.urls import path
from .views import (
    ReviewListView,
    ReviewDetailView,
    ReviewCreateView,
    ReviewUpdateView,
    ReviewDeleteView,
    ReviewProductListView,
    ReviewProductDetailView,
    ReviewProductCreateView,
    ReviewProductUpdateView,
    ReviewProductDeleteView,
)

urlpatterns = [
    #reviews
    path("list/", ReviewListView.as_view(), name="review-list"),
    path("detail/<str:id>/", ReviewDetailView.as_view(), name="review-detail"),
    path("create/", ReviewCreateView.as_view(), name="review-create"),
    path("update/<str:id>/", ReviewUpdateView.as_view(), name="review-update"),
    path("delete/<str:id>/", ReviewDeleteView.as_view(), name="review-delete"),
    
    #reviews products
    path("product/list/", ReviewProductListView.as_view(), name="review-list"),
    path("product/detail/<str:id>/", ReviewProductDetailView.as_view(), name="review-detail"),
    path("product/create/", ReviewProductCreateView.as_view(), name="review-create"),
    path("product/update/<str:id>/", ReviewProductUpdateView.as_view(), name="review-update"),
    path("product/delete/<str:id>/", ReviewProductDeleteView.as_view(), name="review-delete"),
]