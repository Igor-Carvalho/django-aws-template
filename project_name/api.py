"""Rotas da API."""

from rest_framework import routers

from {{ project_name }}.apps.administrativo.usuarios.api import UsuarioViewSet

router = routers.DefaultRouter()
router.register('usuarios', UsuarioViewSet)

urls = router.urls, '{{ project_name }}', 'v1'
