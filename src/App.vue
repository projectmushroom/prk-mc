<template>
  <v-app v-resize="onResize">
    <v-app-bar
      v-if="$vuetify.breakpoint.mobile"
      collapse
      absolute
      dark
      elevation="0"
      scroll-target="#main-container"
    >
      <v-menu
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon large>
              mdi-menu
            </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in menu"
            :key="i"
            :href="item.to"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-app-bar
      v-else
      absolute
      color="white"
      inverted-scroll
      scroll-target="#main-container"
    >
      <v-spacer />
      <v-btn
        v-for="(item, i) in menu"
        :key="i"
        text
        :href="item.to"
        color="black"
        class="text-h6 font-dosis text-capitalize font-weight-bold"
        style="font-family: 'Lato', sans-serif !important;"
      >
        {{ item.name }}
      </v-btn>
    </v-app-bar>
    <vue-scroll-snap
      id="main-container"
      :fullscreen="true"
    >
      <div
        id="one"
        :class="isSmall"
        :style="shiftHeight"
      >
        <v-container
          fluid
          fill-height
          :class="$vuetify.breakpoint.mobile ? '' : 'side-img'"
          pt-16
        >
          <v-row :class="$vuetify.breakpoint.mobile ? 'ma-12 pa-10' : ''" />
          <v-row
            align="center"
            :justify="$vuetify.breakpoint.mobile ? 'center' : ''"
          >
            <v-col
              md="6"
              xs="12"
              :class="$vuetify.breakpoint.mobile ? 'text-center mt-12 pt-6' : 'mt-12 ml-12'"
            >
              <div
                class="text-h6 text-md-h4 text-lg-h4 text-xl-h4 font-lato accent--text font-weight-bold"
                style="font-family: 'Dosis', sans-serif !important;"
              >
                A convenient way to chat about<br>your status privately.
              </div>
              <hr
                :class="$vuetify.breakpoint.mobile ? 'solid mt-5 mb-5 mm-hr mm-hr-center' : 'solid mt-5 mb-5 mm-hr'"
              >
              <div
                class="text-h3 text-lg-h2 text-xl-h1 font-dosis text-uppercase white--text font-weight-bold"
                style="font-family: 'Dosis', sans-serif !important;"
              >
                Join <span class="accent--text">MenConnect</span>, an HIV support service for men.
              </div>
              <div
                class="text-subtitle-1 text-md-h6 text-lg-h5 text-xl-h5 text-xl-h5 font-lato font-weight-bold mt-5"
                style="font-family: 'Lato', sans-serif !important; color:#B9B9B9 !important"
              >
                Ask questions, get answers and enable a positive mindset in the journey of HIV/AIDS.
              </div>
              <v-btn
                min-width="200px"
                x-large
                rounded
                color="accent"
                class="black--text text-h6 text-capitalize mt-5"
                @click="dialog = true"
              >
                Start your Journey
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            justify="center"
          >
            <v-btn
              v-if="windowSize.y >= 900"
              text
              href="#two"
              color="white"
              x-large
              class="text-h6"
            >
              Find Out More
            </v-btn>
          </v-row>
        </v-container>
      </div>
      <div
        id="two"
        :class="isSmall"
      >
        <v-container
          fluid
          py-16
        >
          <v-row
            align="start"
            justify="center"
            class="ma-6"
          >
            <v-col
              md="10"
            >
              <div
                class="text-h4 text-lg-h3 text-xl-h2 text-center font-dosis text-uppercase white--text font-weight-bold"
                style="font-family: 'Dosis', sans-serif !important;"
              >
                Join Menconnect and meet Mo, a registered male nurse who can help you to:
              </div>
            </v-col>
          </v-row>
          <v-row
            justify="center"
            class="ma-6"
          >
            <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
              <v-row
                justify="center"
                :class="$vuetify.breakpoint.mdAndDown ? 'mx-4' : 'mx-4 px-4'"
              >
                <v-col
                  :cols="$vuetify.breakpoint.smAndDown ? 12 : 6"
                >
                  <div
                    class="text-h6 font-lato  text-center white--text font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    <v-btn
                      elevation="0"
                      fab
                      x-large 
                      color="primary"
                      class="mb-2"
                    >
                      <v-icon color="white">
                        mdi-forum
                      </v-icon>
                    </v-btn><br>
                    Get answers to your<br>HIV and treatment questions
                  </div>
                </v-col>
                <v-col
                  :cols="$vuetify.breakpoint.smAndDown ? 12 : 6"
                >
                  <div
                    class="text-h6 font-lato  text-center white--text font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    <v-btn
                      elevation="0"
                      fab
                      x-large 
                      color="primary"
                      class="mb-2"
                    >
                      <v-icon color="white">
                        mdi-translate
                      </v-icon>
                    </v-btn><br>
                    Get messages in English, isiZulu &amp; seSotho on WhatsApp or SMS
                  </div>
                </v-col>
              </v-row>
              <v-row
                justify="center"
                :class="$vuetify.breakpoint.mdAndDown ? 'mx-4' : 'mx-4 px-4'"
              >
                <v-col
                  :cols="$vuetify.breakpoint.smAndDown ? 12 : 6"
                >
                  <div
                    class="text-h6 font-lato  text-center white--text font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    <v-btn
                      elevation="0"
                      fab
                      x-large 
                      color="primary"
                      class="mb-2"
                    >
                      <v-icon color="white">
                        mdi-bell
                      </v-icon>
                    </v-btn><br>
                    Be reminded about<br>your regular clinic appointments
                  </div>
                </v-col>
                <v-col
                  :cols="$vuetify.breakpoint.smAndDown ? 12 : 6"
                >
                  <div
                    class="text-h6 font-lato  text-center white--text font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    <v-btn
                      elevation="0"
                      fab
                      x-large 
                      color="primary"
                      class="mb-2"
                    >
                      <v-icon color="white">
                        mdi-human
                      </v-icon>
                    </v-btn><br>
                    Get advice on your HIV journey, whether you’ve started meds or not
                  </div>
                </v-col>
              </v-row>
              <v-row
                justify="center"
                class="mx-4"
              >
                <v-col
                  :cols="$vuetify.breakpoint.smAndDown ? 12 : 6"
                >
                  <div
                    class="text-h6 font-lato  text-center white--text font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    <v-btn
                      elevation="0"
                      fab
                      x-large 
                      color="primary"
                      class="mb-2"
                    >
                      <v-icon color="white">
                        mdi-share-variant
                      </v-icon>
                    </v-btn><br>
                    Connect you to other services to live a strong and healthy life
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col
              :cols="$vuetify.breakpoint.smAndDown ? 12 : 6"
              style="max-height:500px"
            >
              <v-img
                class="mockgif"
                position="center center"
                contain
                max-height="500px"
                max-width="700px"
                src="@/assets/menconnect_mc.gif"
                lazy-src="@/assets/mc_placeholder.png"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    />
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>

          <v-row
            align="center"
            justify="center"
          >
            <v-btn
              min-width="200px"
              rounded
              x-large
              color="accent"
              class="black--text text-h6 text-capitalize my-6"
              @click="dialog = true"
            >
              Meet MO
            </v-btn>
          </v-row>
        </v-container>
      </div>
      <div
        id="three"
        :class="isSmall"
      >
        <v-container
          fluid
          fill-height
          pa-0
        >
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
            style="min-height: 600px;"
          >
            <div class="text-h4 text-center white--text text-uppercase">
              <v-icon
                size="150px"
                color="white"
                @click="video = true"
              >
                mdi-play-circle-outline
              </v-icon>
              <br>
              <span
                class="text-h3 font-dosis test-center text-uppercase white--text font-weight-bold"
                style="font-family: 'Dosis', sans-serif !important;"
              >watch video</span>
            </div>
          </v-row>
          <v-dialog
            v-if="video"
            v-model="video"
            overlay-opacity="0.8"
            overlay-color="black"
          >
            <v-responsive
              :aspect-ratio="16/9"
              class="video-background"
            >
              <iframe
                :src="videoLink"
                frameborder="0"
                allowfullscreen
              />
            </v-responsive>
          </v-dialog>
        </v-container>
      </div>
      <div
        id="four"
        :class="isSmall"
      >
        <v-container
          fluid
          fill-height
          py-16
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              md="6"
            >
              <div
                class="text-h4 text-lg-h3 text-xl-h2 text-center font-dosis text-uppercase white--text font-weight-bold mb-16"
                style="font-family: 'Dosis', sans-serif !important;"
              >
                Frequently asked questions:
              </div>
              <v-expansion-panels :value="0">
                <v-expansion-panel>
                  <v-expansion-panel-header
                    class="text-h6 font-lato text-uppercase font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    What is HIV?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content
                    class="text-h6 font-lato white--text font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    HIV is a virus that enters your body through blood or bodily fluids. It attacks your body's immune system, especially your CD4 cells. CD4 cells protect your body against diseases. They are your body's soldiers. As there is currently no cure for HIV, people living with HIV need to take treatment in the form of ARVs.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    class="text-h6 font-lato text-uppercase font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    What is MenConnect?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content
                    class="text-h6 font-lato white--text font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    MenConnect is an SMS and WhatsApp service that supports men living with HIV.
                    You get messages every few days giving you info and advice on your HIV diagnosis. You also get reminders to attend your appointments at the clinic. The messages are available in English, seSotho, or isiZulu.
                    <br><br>
                    On MenConnect, you’ll also meet Mo who is a male certified nurse. He is available to answer any of your HIV- and treatment-related questions.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    class="text-h6 font-lato text-uppercase font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    Who is Mo?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content
                    class="text-h6 font-lato white--text font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    Mo is a male certified nurse on MenConnect. He has a lot of experience in HIV. Mo is available to answer any HIV- and treatment-related questions you may have. He always tries to respond to your questions within 24 hours during weekdays.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    class="text-h6 font-lato text-uppercase font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    Should I join MenConnect?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content
                    class="text-h6 font-lato white--text font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    If you are a man living with HIV, MenConnect is here to help you whether you’ve started ARV treatment or not.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    class="text-h6 font-lato text-uppercase font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    What will happen to the information I share with Mo on MenConnect?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content
                    class="text-h6 font-lato white--text font-weight-bold"
                    style="font-family: 'Lato', sans-serif !important;"
                  >
                    MenConnect collects and uses some of your personal information to send you messages that are relevant to the stage of your health journey.
                    <br><br>
                    Your information is protected. It is kept confidential and strict privacy and security guidelines are followed.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <v-row
                align="end"
                justify="center"
              >
                <v-btn
                  min-width="200px"
                  x-large
                  rounded
                  color="accent"
                  class="black--text text-h6  mt-10"
                  @click="dialog = true"
                >
                  Ask your first question
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div
        id="five"
        :class="isSmall"
      >
        <v-container
          fluid
          fill-height
          pt-16
        >
          <v-row
            align="start"
            justify="center"
          >
            <v-col
              md="6"
            >
              <div
                class="text-h4 text-sm-h3 text-lg-h2 text-xl-h1 text-center font-dosis text-uppercase accent--text font-weight-bold"
                style="font-family: 'Dosis', sans-serif !important;"
              >
                THINK <span class="white--text">| </span>LIVE <span class="white--text">| </span>BE
              </div>
              <div
                class="text-h1 text-center font-dosis text-uppercase accent--text font-weight-bold mt-6"
                :style="`font-size: ${$vuetify.breakpoint.mdAndDown ? '80px' : '170px'} !important; font-family: 'Dosis', sans-serif !important;`"
              >
                POSITIVE
              </div>
              <div
                class="text-h6 text-center font-lato text-uppercase white--text font-weight-bold ma-10"
                style="font-family: 'Lato', sans-serif !important;"
              >
                We help you live a strong and healthy life with HIV. 
              </div>

              <v-row
                justify="center"
              >
                <v-col
                  md="6"
                >
                  <div
                    class="text-h4 text-lg-h3 text-xl-h2 text-center font-dosis text-uppercase white--text font-weight-bold mb-8"
                    style="font-family: 'Dosis', sans-serif !important;"
                  >
                    Get Started
                  </div>
                  <div class="text-h6 text-center font-lato text-uppercase white--text font-weight-regular mt-6">
                    Chat with Mo from MenConnect, <br>an HIV support service for men.
                  </div>
                  <div class="text-h6 text-center font-lato text-uppercase white--text font-weight-light mt-10">
                    For SMS messages, <br>dial <span class="accent--text font-weight-bold">*134*406#</span><br>
                    Or<br>
                    For WhatsApp messages, 
                    <br>Send <span class="accent--text font-weight-bold">“Hi”</span> to <span class="accent--text font-weight-bold">060 063 6001</span><br>
                  </div>
                </v-col>
              </v-row>
              <v-row
                justify="center"
              >
                <v-btn
                  min-width="200px"
                  x-large
                  rounded
                  color="accent"
                  class="black--text text-h6text-capitalize mt-10"
                  @click="dialog = true"
                >
                  Start your Journey
                </v-btn>
              </v-row>
              <v-spacer :style="$vuetify.breakpoint.mobile ? 'height:300px' : ''" />
            </v-col>
          </v-row>
          <v-row
            align="bottom"
          >
            <v-col>
              <div
                class="text-caption text-right white--text font-lato mr-2"
                style="font-family: 'Lato', sans-serif !important; !important"
              >
                {{ new Date().getFullYear() }} — <strong>MENCONNECT</strong>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-dialog
        v-model="dialog"
        max-width="400px"
      >
        <v-expand-transition>
          <v-card
            v-if="!submit"
            color="#132C3B"
            dark
          >
            <v-card-title
              class="text-h5 text-md-h3 text-lg-h3 text-xl-h3 font-lato accent--text font-weight-bold mb-3"
              style="font-family: 'Dosis', sans-serif !important;"
            >
              What is your cellphone number?
            </v-card-title>
            <v-card-text
              class="text-subtitle-1 text-md-h6 text-lg-h5 text-xl-h5 text-xl-h5 font-lato font-weight-bold"
              style="font-family: 'Lato', sans-serif !important; color:#B9B9B9 !important"
            >
              Mo will send you a message to get you signed up to MenConnect.
            </v-card-text>
            <v-card-text>
              <vue-tel-input-vuetify v-model="phone" />
            </v-card-text>
          
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="secondary"
                text
                @click="dialog = false"
              >
                Cancel
              </v-btn>
              <v-btn
                color="accent"
                text
                @click="submit = true"
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card
            v-else
            color="#132C3B"
            dark
          >
            <v-card-title
              class="text-h5 text-md-h3 text-lg-h3 text-xl-h3 font-lato accent--text font-weight-bold mb-3"
              style="font-family: 'Dosis', sans-serif !important;"
            >
              Thank you!
            </v-card-title>
            <v-card-text
              class="text-subtitle-1 text-md-h6 text-lg-h5 text-xl-h5 text-xl-h5 font-lato font-weight-bold"
              style="font-family: 'Lato', sans-serif !important; color:#B9B9B9 !important"
            >
              Look out for a message from Mo on SMS or WhatsApp.
            </v-card-text>
          
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="accent"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-dialog>
    </vue-scroll-snap>
  </v-app>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
  export default {
    components: {VueScrollSnap},
    data () {
      return {
        slide: 0,
        menu: [
          {
            name: 'Home',
            to: '#one'
          },
          {
            name: 'Benefits',
            to: '#two'
          },
          {
            name: 'Video',
            to: '#three'
          },
          {
            name: "FAQ's",
            to: '#four'
          },
          {
            name: 'Get Started',
            to: '#five'
          },
        ],
        windowSize: {
          x: 0,
          y: 0,
        },
        videoLink: 'https://www.youtube.com/embed/8x9dZYwvXpE?controls=0&showinfo=0&rel=0&autoplay=0&loop=1&mute=0',
        dialog: false,
        submit: false,
        video: false,
        phone: '',
        collapseOnScroll: true,
      }
    },
    computed: {
      isSmall () {
        return this.windowSize.x <= 900 || this.windowSize.y <= 900 ? 'item mobile-height' : 'item';

      },
      shiftHeight () {
        return this.windowSize.y <= 900 ? `min-height: 900px !important` : ''
      }
    },
    mounted () {
      this.onResize()
    },
    methods: {
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      },
      nextSlide() {
        console.log('next');
        this.slide += 1;
      },
      prevSlide() {
        console.log('previous');
        this.slide -= 1;
      },
    },
  }
</script>
<style lang="scss">

  html, body {
    background: #122D3B;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .mobile-height {
    min-height: fit-content !important;
    scroll-snap-align: none;
  }
  .v-application .text-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-family: 'Dosis', sans-serif !important;
  }
  .font {
    &-lato {
      font-family: 'Lato', sans-serif !important;
    }
      &-dosis {
      font-family: 'Dosis', sans-serif !important;
    }
  }
  #one, #three, #five {
    background-color: #1C3948;
  }
  #two, #four, #six {
    background-color: #71999C;
  }
  #one {
    background-image: url('~@/assets/mainLogo.svg');
    background-position: 50% -470px;
    background-repeat: no-repeat;
    .container{
      &.side-img {
        background: url('~@/assets/sideImg.png') 100% center no-repeat;
        background-size: contain;
      }
    }
  }
  #two {
    min-height: 100%;
  }
  #three {
    background-image: url('~@/assets/vidPlacheloder.jpg');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #five {
    .container{
      background: url('~@/assets/footerImg.png') 0 100% no-repeat;
    }
    &.mobile-height {
      .container{
        background-size: 70%;
      }
    }
  }
  .scroll-snap-container {
    z-index: 0;
  }
  .v-toolbar {
    &--collapsed {
      background-color: #122D3B !important;
      width: 60px;
      border-bottom-right-radius: 0 !important;
      border-bottom-left-radius: 24px !important;
      left: auto !important;
      padding-left: 4px;
    }
  }
  .mm-hr {
    border-top: 4px solid #FDE900;
    width: 70px;
    &-center {
      margin: auto;
    }
  }
  .mockgif {
    margin: 0 auto;
  }
  .v-expansion-panel {
    background-color: transparent !important;
    color: white !important;
    border: 2px solid white;
    margin-bottom: 5px;
    &--active {
      background-color: #5C888B !important;
    }
    &-header--active {
      color: #FDE900 !important;;
    }
  }
  .theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon {
      color: white !important;
  }
  .video-background {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    overflow: hidden;
  }
  .video-background iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>