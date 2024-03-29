from random import randint
from django.http import JsonResponse

from rest_framework import generics
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, IsAuthenticated
from rest_framework.views import APIView

from .minerals import dict
from .models import Item
from .serializers import ItemSerializer
from .strutures.quick_sort import QuickSort
from .strutures.merge_sort import MergeSort


from django.contrib.auth import get_user_model
from ..profiles.serializers import CurrentUserSerializer

import sys
sys.setrecursionlimit(1500)

User = get_user_model()


# todo: make filter after use mixins methods
class ItemListView(generics.ListAPIView):
    lookup_field = 'slug'
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Item.objects.all()


class ItemCreateView(generics.CreateAPIView):
    lookup_field = 'slug'
    serializer_class = ItemSerializer

    def get_queryset(self):
        return Item.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ItemRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'slug'
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Item.objects.all()


class QuickSortAPI(generics.ListAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    renderer_classes = [JSONRenderer]

    def get(self, request):
        items = ItemSerializer(Item.objects.all(), many=True)
        item_sorted = QuickSort(items.data)
        item_sorted.sort()
        return Response(item_sorted.data)


class MergeSortAPI(generics.ListAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    renderer_classes = [JSONRenderer]

    def get(self, request):
        items = ItemSerializer(Item.objects.all(), many=True)
        item_sorted = MergeSort(items.data)
        item_sorted.sort()
        return Response(item_sorted.data)


class ItemFavoriteAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    renderer_classes = [JSONRenderer]
    serializer_class = CurrentUserSerializer

    def post(self, request, item_slug=None):
        user = self.request.user
        print('user in favorite post')
        print(user.profile.bio)
        return Response(user)


def Seeder(self):
    # cont = 0
    # q = ['Low', 'Mid', 'High']
    # user_names = ['juanlu', 'guillermo', 'jordi', 'ivan', 'raul', 'ethan']
    #
    # while cont < 500:
    #     user = User.objects.get(username=user_names[randint(0, 5)])
    #     mineral = dict[randint(0, 200)]
    #     num = randint(0, 1000)
    #     item = Item(
    #         slug=mineral['name'] + '_' + user.username,
    #         name=mineral['name'],
    #         sell_price=int(num * (randint(85, 95) / 100)),
    #         buy_price=num,
    #         quantity=randint(100, 2500),
    #         quality=q[randint(0, 2)],
    #         owner=user
    #     )
    #     # item.save()
    #     cont += 1

    return Response('cont')
