<template>
  <div class="">
    <div class="gridContainer d-flex align-self-center">
      <div
        class="containerOneChildOne col-12 col-sm-7 text-left align-self-center pr-15 pl-0"
      >
        <div class="imgContainer">
          <img
            class="mockupImg"
            src="https://images.unsplash.com/photo-1541096088083-65e23ee14e43?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="iphone mockup1"
          />
        </div>
      </div>
      <div
        class="containerOneChildTwo col-12 col-sm-5 text-left align-self-center"
      >
        <h2 class="HowItWorks">How it Works ?</h2>

        <div class="liwrapper">
          <div id="imageONE" class="left_border liBgActive">
            <h6>Add in seconds</h6>
            <p>Just two clicks to install. It’s 100% free.</p>
          </div>
          <div id="imageTWO" class="left_border">
            <h6>Shop like normal</h6>
            <p>
              The Cause Button will appear when you visit a store offering free
              donations.
            </p>
          </div>
          <div id="imageTHREE" class="left_border">
            <h6>Raise money for charity</h6>
            <p>Just two clicks to install. It’s 100% free.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.HowItWorks {
  text-align: center;
  margin-top: 20px;
  color: #0c1831;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 45px;
  margin-bottom: 42px;
}

.gridContainer {
  // margin: 10px 30px;
  // display: grid;
  // grid-template-columns: 45% 55%;
  min-height: 600px;
}

.containerOneChildOne {
  // text-align: center;
  // place-items: center;
}

.containerOneChildOne img {
  max-width: 100%;
  // padding: 30px;
}

.liwrapper {
  // margin-top: 30px;
  // margin-left: 20px;
  // border-left: 2px solid #bdbdbd;
  border-left: 1px solid #151515;
  h2 {
  }
  h6 {
    color: #3c76a6;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 3px;
  }
  p {
    color: #0c1831;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 28px;
    margin: 0px;
  }
  > div {
    border: 0px;
    padding-bottom: 25px;
    position: relative;
    padding-left: 40px;
    padding-top: 15px;

    &.liBgActive {
      &:after {
        content: '';
        position: absolute;
        left: -2px;
        top: 0;
        width: 3px;
        height: 100%;
        z-index: 99;
        background: #3c76a6;
        border-radius: 100px;
      }
    }
  }
}

// .liBgActive:before {
//   background-color: coral !important;
// }

.imgContainer {
  transition: all 1s ease;
  height: 100%;
}

.banner-wrapper {
  padding-top: 100px !important;
  padding-bottom: 100px !important;
  h2 {
    color: #3c76a6;
    font-family: Roboto;
    font-size: 60px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 53px;
  }
  h3 {
    color: #0c1831;
    font-family: Roboto;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 55px;
  }
  p {
    color: #0c1831;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 33px;
    margin-bottom: 48px;
    margin-top: 40px;
    strong {
      font-weight: bold;
    }
  }
}
</style>
<script>
export default {
  name: 'HowitWorks',
  props: {
    title: String,
    description: String,
  },
  mounted() {
    const node = document.querySelector('.liwrapper')
    const img = document.querySelector('.mockupImg')

    node.addEventListener('click', (e) => {
      const k = e.target.parentNode.childNodes
      const arr9 = Array.prototype.slice.call(k)
      console.log(k)
      arr9.forEach((element) => {
        if (element.classList) {
          element.classList.remove('liBgActive')
        } else {
        }
      })

      switch (e.target.id) {
        case 'imageONE':
          e.target.className = 'liBgActive'
          img.src = 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'

          break

        case 'imageTWO':
          img.src = 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          e.target.className = 'liBgActive'
          break

        case 'imageTHREE':
          img.src =
            'https://images.unsplash.com/photo-1521547116720-6ccf948f63b9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
          e.target.className = 'liBgActive'
          break

        case 'imageFOUR':
          img.src =
            'https://images.unsplash.com/photo-1587813724049-6f728b259c17?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
          e.target.className = 'liBgActive'
          break

        default:
      }
    })
  },
}
</script>
