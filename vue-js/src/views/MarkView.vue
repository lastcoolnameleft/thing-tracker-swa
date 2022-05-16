<template>
<main class="container">
  <div class="bg-light p-4 rounded">
        <h1 class="mt-0 mb-3">Mark a {{ shortName }}</h1>


    <!--
      {% if error_message %}<p><strong>{{ error_message }}</strong></p>{% endif %}
    -->
        <!-- Page Heading/Breadcrumbs -->

        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="/">Home</a>
            </li>
            <li class='breadcrumb-item active'>Mark a {{ shortName }}</li>
        </ol>

        <div class="row">
            <div class="col-lg-12">
                <form enctype="multipart/form-data" action="/mark/" method="post">
                    <!--{% csrf_token %} 
                    {{ form.non_field_errors }}
                    {{ form.lat.as_hidden }}
                    {{ form.lng.as_hidden }}
                    -->
                    <dl class="row">
                        <dt class="col-sm-2">
                            <label >{{ shortName }} #:</label>
                        </dt>
                        <dd class="col-sm-10">
                          <input v-model="thing_id" placeholder="e.g. 1,2,42" />
                        </dd>

                        <dt class="col-sm-2">
                            <label >Name:</label>
                        </dt>
                        <dd class="col-sm-10">
                            <input v-model="duck_id" placeholder="e.g. Duckie McDuckFace" />
                            <div id='name_notification'></div>
                        </dd>

                        <dt class="col-sm-2">
                            <label for="{{ location }}">Location:</label>
                        </dt>
                        <dd class="col-sm-10">
                            <input v-model="location" placeholder="e.g. Paris, France" />
                          <!---
{% if form.lat.errors or form.lng.errors %}
                        Unable to find Lat/Long for the location.  Please try again.<br/>{% endif %}
                        -->
                        </dd>

<!--
                        <dt class="col-sm-2">Map:</dt>
                        <dd class="col-sm-10"><div id="map"></div></dd>

                        <dt class="col-sm-2">
                            <label for="{{ form.date_time.id_for_label }}">Date/Time:<br />(e.g. MM/DD/YYYY HH:MM)</label>
                        </dt>
                        <dd class="col-sm-10">
                            {{ form.date_time }} <a href='https://en.wikipedia.org/wiki/Coordinated_Universal_Time'>UTC Timezone</a>
                            {{ form.date_time.errors }}
                        </dd>

                        <dt class="col-sm-2">
                            <label for="{{ form.image.id_for_label }}">Upload an image:</label>
                        </dt>
                        <dd class="col-sm-10">
                            {{ form.image}}
                            {{ form.image.errors }}
                        </dd>
-->
                        <dt class="col-sm-2">
                            <label for="{{ form.comments.id_for_label }}">Comments/Story:</label>
                        </dt>
                        <dd class="col-sm-10">
                          <textarea v-model="comments"></textarea>
                        </dd>

                        <dt class="col-sm-2">&nbsp;</dt>
                        <dd class="col-sm-10"><input type='submit' name="submit" value='Submit the new location'></dd>

                    </dl>

                </form>
            </div>
        </div>
  </div>
</main>


</template>
<!--
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
-->