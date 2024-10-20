

from django.urls import path
from .views import getTeams, createTeams


urlpatterns  = [
  path('teams/', getTeams, name='get_all_teams'),
  path('teams/create/', createTeams, name='create_team')
]