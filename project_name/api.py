"""Rotas da API."""

from rest_framework import routers

from {{ project_name }}.apps.administrativo.usuarios import api as usuarios_api

router = routers.DefaultRouter()
router.register('usuarios', usuarios_api.UsuarioViewSet)

urls = router.urls, '{{ project_name }}', 'v1'
