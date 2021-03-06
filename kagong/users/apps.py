from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'kagong.users'
    verbose_name = "Users"

    def ready(self):
        """Override this to put in:
            Users system checks
            Users signal registration
        """

        from .signal import user_signed_up