from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers

class ListAllImages(APIView):

    def get(self, request, format=None):

        all_images = models.Image.objects.all()

        serializer = serializers.ImageSerializer(all_images, many=True)

        return Response(data=serializer.data)


class ListAllComment(APIView):

    def get(self, request, format=None):

        all_comment = models.Comment.objects.all()

        serializer = serializers.CommentSerializer(all_comment, many=True)

        return Response(data=serializer.data)


class ListAllLike(APIView):

    def get(self, request, format=None):

        all_like = models.Like.objects.all()

        serializer = serializers.LikeSerializer(all_like, many=True)

        return Response(data=serializer.data)