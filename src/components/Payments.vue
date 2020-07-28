<template>
  <v-row class="flex-wrap" no-gutters>
    <v-col :cols="12" :md="4" >
      <div class="aside-info white--text ma-2 ma-md-0">
        <h2 class="aside-info__title mb-3 mb-md-5">You are buying</h2>
        <div class="aside-info__description mb-3 mb-md-7">
          Flight in space /Jupiter Area <br>
          From IO to GANIMED, J29, 2048, G5/42 <br>
          Spaceship "Queen of the Sun"
        </div>
        <div class="aside-info__amount">42350.00 USD</div>
        <div class="aside-info__sub-text"><span>Amount to pay without the payment system commission</span></div>
        <div class="d-none d-md-block mt-md-12">
          <h2 class="aside-info__title">Seller</h2>
          <div class="aside-info__description">
            National Aeronautics and Space Administration (NASA) <img src="../assets/planet.svg" class="icon">
            <br>
            Headquarters 300 E. Street SW, Suite 5R30</div>
          <div class="aside-info__sub-text">
            <span>Rating:</span> 5 <br>
            <span>Reviews:</span> 308 042
          </div>
          <div class="aside-info__providing">Provided by Onpay.ru</div>
        </div>
        <div class="aside-info__pin d-block d-md-none rounded-pill mt-3"></div>
      </div>
    </v-col>
    <v-col :cols="12" :md="8">
      <div class="payment ">
        <div class="d-flex justify-space-between align-center mb-5">
          <h2 class="payment__title ">Payment method </h2>
          <a href="#">Payment limits</a>
        </div>
        <template v-if="isDesktop">
          <v-btn-toggle
            v-model="paymentType"
            light
            class="d-flex"
          >
            <v-btn large max-height="36" active-class="primary white--text" class="payment__type flex-grow-1">E-money</v-btn>
            <v-btn large max-height="36" active-class="primary white--text" class="payment__type flex-grow-1">Mobile Payments</v-btn>
            <v-btn large max-height="36" active-class="primary white--text" class="payment__type flex-grow-1">Bank Cards</v-btn>
            <v-btn large max-height="36" active-class="primary white--text" class="payment__type flex-grow-1">Bank Transfers</v-btn>
            <v-btn large max-height="36" active-class="primary white--text" class="payment__type flex-grow-1">Terminals</v-btn>
          </v-btn-toggle>
          <v-row class="mb-16">
            <div class="e-payment">
              <div class="e-payment__img"><img src="../assets/qiwi.png" alt="qiwi"></div>
              <div class="text-center"> <strong>Qiwi Wallet</strong> <br> Payment Fees 1.5%</div>
            </div>
            <div class="e-payment">
              <div class="e-payment__img"><img src="../assets/skrill.png" alt="skrill"></div>
              <div class="text-center"> <strong>Skrill</strong> <br> Payment Fees 2.5%</div>
            </div>
            <div class="e-payment">
              <div class="e-payment__img"><img src="../assets/payoneer.png" alt="payoneer"></div>
              <div class="text-center"> <strong>Payoneer</strong> <br> Payment Fees 5%</div>
            </div>
            <div class="e-payment">
              <div class="e-payment__img"><img src="../assets/payza.png" alt="payza"></div>
              <div class="text-center"> <strong>Payza</strong> <br> Payment Fees 2.5%</div>
            </div>
            <div class="e-payment">
              <div class="e-payment__img"><img src="../assets/yandex.png" alt="yandex"></div>
              <div class="text-center"> <strong>Yandex.Money</strong> <br> Payment Fees 2.5%</div>
            </div>
            <div class="e-payment">
              <div class="e-payment__img"><img src="../assets/paypal.png" alt="paypal"></div>
              <div class="text-center"> <strong>PayPal</strong> <br> Payment Fees 0.5%</div>
            </div>
          </v-row>
        </template>
        <template v-else>
          <v-select
            v-model="method"
            class="payment__methods"
            :items="paymentMethods"
            label="Payment method"
            single-line outlined dense
          />
        </template>

        <h2 class="payment__title mb-5">Payment</h2>
        <v-row class="payment__field field mb-3 align-center"  no-gutters>
          <v-col :cols="12" :md="4">
            <div class="field__title d-flex justify-space-between mr-md-3">
              <span>Amount with commission</span>
              <span class="d-inline d-md-none grey--text">2.5% (+$1058.75)</span>
            </div>
          </v-col>
          <v-col :cols="12" :md="5" class="mr-md-3">
            <v-text-field
              readonly
              value="1534.75"
              single-line outlined dense filled hide-details
              suffix="USD"
            />
          </v-col>
          <v-col class="d-none d-md-block grey--text">
            <span>payment system fees <br> 2.5% (+$1058.75)</span>
          </v-col>
        </v-row>
        <v-row class="payment__field field mb-3 align-center" no-gutters>
          <v-col :cols="12" :md="4">
            <div class="field__title">{{ method }} Account</div>
          </v-col>
          <v-col :cols="12" :md="5">
            <v-text-field
              value="vyacheslav.kasimov@yandex.ua"
              single-line outlined dense hide-details
            />
          </v-col>
        </v-row>
        <v-row class="payment__field field mb-3 align-center" no-gutters>
          <v-col :cols="12" :md="4">
            <div class="field__title">Phone</div>
          </v-col>
          <v-col :cols="12" :md="5">
            <v-text-field
              value="+380502879704"
              single-line outlined dense hide-details
            />
          </v-col>
        </v-row>
        <v-row class="payment__field field mb-3" no-gutters>
          <v-col :cols="12" :md="4">
            <div class="field__title">Message for seller</div>
          </v-col>
          <v-col :cols="12" :md="8">
            <v-textarea
              single-line outlined dense hide-details
              label="If you need additional services, please inform the seller about this"
            />
          </v-col>
        </v-row>
        <v-row class="payment__field field mb-3 align-center" no-gutters>
          <v-col :cols="12" :md="4">
            <div class="field__title">Enter captcha</div>
          </v-col>
          <v-col :cols="12" :md="5">
            <v-row>
              <v-col :cols="8" >
                <v-text-field  name="captcha" single-line outlined dense hide-details />
              </v-col>
              <v-col :cols="4"  class="text-right">
                <img src="../assets/captcha.svg" alt="captcha">
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row no-gutters class="mb-3">
          <v-col :cols="12" :md="8" :offset-md="4">
            By clicking "Confirm payment" I realize that the seller is responsible for the quality of the product/services and accept the <a href="#">terms of the agreement</a>
          </v-col>
        </v-row>
        <v-row class="payment__button white" no-gutters>
          <v-col :cols="12" :md="5" offset-md="4">
            <v-btn large color="primary">Confirm payment</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Payments',

    data: () => ({
      paymentType: null,
      method: 'Yandex.Money',
      paymentMethods: ['Skrill', 'Yandex.Money', 'Qiwi Wallet', 'Payoneer', 'Payza', 'PayPal'].map( item => ({text: item, value: item})),
      isDesktop: true,
    }),
    mounted() {
      window.addEventListener('resize', this.checkIsDesktop)
    },
    destroy() {
        window.removeEventListener('resize', this.checkIsDesktop)
    },
    methods: {
      checkIsDesktop() {
        this.isDesktop = window.innerWidth > 960
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/mixins";
  .aside-info{
    position: relative;
    background: linear-gradient(180deg, #2F37F4 0%, #1820DE 100%);
    box-shadow: 0px 4px 12px rgba(23, 30, 198, 0.35);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0.5rem;
    @include media-breakpoint-desktop {
      height: 100%;
      background: linear-gradient(180deg, #2931EB 0%, #151CC3 100%);
      border-radius: 0;
      box-shadow: none;
      padding: 2.25rem 1.75rem;
    }

    &__title{
      font-size: 20px;
      line-height: 20px;
    }

    &__description{
      line-height: 24px;
    }

    &__amount {
      font-size: 28px;
    }
    &__sub-text span{
      color: #B4B7F8;
    }

    &__providing{
      position: absolute;
      bottom: 1rem;
    }

    &__pin{
      width: 28px;
      height: 2px;
      background: #6066F3;
      margin: auto;
    }
  }
  .payment {
    padding: 1rem 1rem 86px;
    @include media-breakpoint-desktop {
      padding: 2.25rem;
    }
    &__type {
      color: #5B78B9 !important;
      background-color: #EDF2FD !important;
    }
    &__button{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 1rem;

      button {
        text-transform: none;
        width: 100%;
        @include media-breakpoint-desktop {
          width: 210px;
        }
      }

      @include media-breakpoint-desktop {
        position: relative;
      }
    }

  }

  .field {
    &__title{
      color: map-get($grey, 'darken-4');
    }
  }

  .icon {
    display: inline;
    width: 16px;
    vertical-align: middle;
  }

  .e-payment {
    margin: 12px;
    &__img {
      display: flex;
      background-color: #EDF2FD;
      width: 170px;
      height: 146px;
      border-radius: 6px;
      img {
        width: 80%;
        display: block;
        margin: auto;
      }
    }
  }
</style>
