# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-02-16 01:40
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20180216_0955'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='follower',
        ),
        migrations.AddField(
            model_name='user',
            name='followers',
            field=models.ManyToManyField(related_name='_user_followers_+', to=settings.AUTH_USER_MODEL),
        ),
    ]
