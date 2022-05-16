<template>
    <div>
            <!-- Page Heading/Breadcrumbs -->
            <h1 class="mt-0 mb-3">View a Duck
            </h1>
      
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class='breadcrumb-item'><a href='/duck'>Duck</a></li>
              <li class='breadcrumb-item'>
                <select v-model="duck_list" @change="onChange($event)">
                    <option v-for="duck in duck_list" :value="duck.duck_id">
                        {{ duck.name }}
                    </option>
                </select>
              </li>

<!--
<select onChange="javascript:redirectToDuck(this)">
<option value=""></option>
{% for duck_d in duck_list %}
                      <option value="{{ duck_d.duck_id }}"{% if duck_d.duck_id == duck.duck_id %} selected{% endif %}>{{ duck_d.name|default:"Unnamed" }} ({{ duck_d.duck_id }})</option>{% endfor %}
                    </select>
{% if duck_location_list %}
              <li class='breadcrumb-item'>
                    <select onChange="javascript:redirectToDuckLocation(this)">
                      <option value=""></option>
{% for duck_l in duck_location_list %}
                      <option value="{{ duck_l.duck_location_id }}" {% if duck_l.duck_location_id == map.duck_location_id %}selected{% endif %}>{{ duck_l.location }}</option>{% endfor %}
                    </select>
              </li>
{% endif %}
-->
            </ol>
    </div>
</template>
            <!-- /.row -->

<script>
export default {
  methods: {
    onChange(event) {
      console.log(event.target);
      console.log(event.target.value);
      this.$router.push({ path: '/duck/' + parseInt(event.target.value) });
    },
  },
};
    function duckSelected(event) {
      console.log(event.target.value);
    }
    function redirectToDuck(obj)
    {
        var duck_id = obj[obj.selectedIndex].value;
        var URL = '/duck/' + duck_id;
        window.location.href = URL;
    }

    function redirectToDuckLocation(obj)
    {
        var location_id = obj[obj.selectedIndex].value;
        var URL = '/location/' + location_id;
        window.location.href = URL;
    }

</script>