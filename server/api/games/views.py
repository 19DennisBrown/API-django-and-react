

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import TeamSerializer
from .models import Teams

# Create your views here.



@api_view(['GET'])
def getTeams(request):
  teams = Teams.objects.all()
  serializer = TeamSerializer(teams, many=True)
  # return Response(TeamSerializer({'name':'Chelsea', 'age':120}).data)
  return Response( serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def createTeams(request):
  serializer = TeamSerializer(data = request.data)
  if serializer.is_valid():
    serializer.save()
    return Response( serializer.data, status= status.HTTP_201_CREATED)
  return Response( serializer.errors, status = status.HTTP_400_BAD_REQUEST)