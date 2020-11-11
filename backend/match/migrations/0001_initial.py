# Generated by Django 3.0.5 on 2020-11-11 13:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Match',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lat', models.FloatField()),
                ('lng', models.FloatField()),
                ('date', models.DateField()),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('fixed_time', models.TimeField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Sports',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sports_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='MatchUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_pk', models.IntegerField()),
                ('team', models.BooleanField(null=True)),
                ('match', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='match.Match')),
            ],
        ),
        migrations.AddField(
            model_name='match',
            name='sports',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='match.Sports'),
        ),
        migrations.CreateModel(
            name='Locations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('lat', models.FloatField(null=True)),
                ('lng', models.FloatField(null=True)),
                ('gu_name', models.CharField(max_length=200, null=True)),
                ('address', models.CharField(max_length=200, null=True)),
                ('tel', models.CharField(max_length=200, null=True)),
                ('url', models.TextField(null=True)),
                ('sports', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='match.Sports')),
            ],
        ),
    ]
