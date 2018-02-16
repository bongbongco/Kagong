from django.conf.urls import url
from . import views

urlpatterns = [
    url(
        regex=r'^all/$',
        view=views.ListAllImages.as_view(),
        name='all_images'
    ),
    url(
        regex=r'^comment/all/$',
        view=views.ListAllComment.as_view(),
        name='all_comment'
    ),
    url(
        regex=r'^like/all/$',
        view=views.ListAllLike.as_view(),
        name='all_like'
    ),
]