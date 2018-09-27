<!-- <template>
    <div id="cards">
        <section v-for="card in cards" :key="card.id" class="slide text-center" v-bind:style="{ backgroundImage: 'url(' + card.image + ')' }">
        <div class="container">
            <div class="row">
            <div class="col-md-12 mx-auto">
                <div class="card" style="width: 24rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{card.title}}</h5>
                        <p class="card-text">{{card.text}}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
</template> -->

<template lang="pug">
    .cards
        section.slide.text-center
        .container
            .row
                .col-md-12.mx-auto
                    .card
                        .card-body
                            h5.title {{ card.title }}
                            p.card-text {{ card.text }}
</template>

<script>
export default {
  data () {
      return {
          cards: [
            {
                title: 'Mother Earth Network',
                text: 'A sensor data network and software, created to enhance our environmental health through a community-based approach.<br /><br />We call it the: social eco-data network.',
                image: '../assets/img/graphic-liggend-final-1024x6402.jpg'
            }
        ]
      }
    
  }
}
</script>