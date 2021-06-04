const rt = `<div class="rt">
<div class="main-filters">
  <h2 class="main-filters__title">Retouch</h2>
  <div class="main-filters__grid">
    <button class="main-filters__grid-button">Stamp</button>
    <button class="main-filters__grid-button">Texture</button>
    <button class="main-filters__grid-button">Skin</button>
    <button class="main-filters__grid-button">Median</button>
    <button class="main-filters__grid-button">Gauss 2</button>
    <button class="main-filters__grid-button">Gauss 3</button>
    <button class="main-filters__grid-button">Low F</button>
    <button class="main-filters__grid-button">Soft Skin</button>
    <button class="main-filters__grid-button">Auto</button>
  </div>
</div>
<div class="main-dodge">
  <h2 class="main-dodge__title">Dodge & Burn</h2>
  <div class="main-dodge__grid">
    <button class="main-dodge__grid-button">Curves</button>
    <button class="main-dodge__grid-button">Overlay</button>
    <button class="main-dodge__grid-button">Soft Light</button>
    <button class="main-dodge__grid-button">Auto DB</button>
    <button class="main-dodge__grid-button">Pores</button>
    <div class="main-dodge__grid-wrapper">
      <button class="main-dodge__grid-button_min">D</button>
      <span>&</span>
      <button class="main-dodge__grid-button_min">B</button>
    </div>
  </div>
</div>
<div class="main-layers">
  <h2 class="main-layers__title">Layers</h2>
  <div class="main-layers__grid">
    <button class="main-layers__grid-button">Soft Light</button>
    <button class="main-layers__grid-button">Overlay</button>
    <button class="main-layers__grid-button">Gray</button>
  </div>
</div>
</div>`

const tools = `<div class="tools">
  <div class="main-brightness">
    <h2 class="main-brightness__title">Tools</h2>
    <div class="main-brightness__grid">
      <div class="main-brightness__grid-block">
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.50019 3.24396C4.70477 3.24396 3.24414 4.70487 3.24414 6.50029C3.24414 8.29571 4.70477 9.75662 6.50019 9.75662C8.29531 9.75662 9.75623 8.29599 9.75623 6.50029C9.75623 4.70459 8.29531 3.24396 6.50019 3.24396Z"
            fill="#DCDDDC"
          />
          <path
            d="M6.49958 2.2868C6.14867 2.2868 5.86426 2.00239 5.86426 1.65177V0.635319C5.86426 0.284411 6.14867 0 6.49958 0C6.85048 0 7.1349 0.284411 7.1349 0.635319V1.65177C7.1349 2.00239 6.8502 2.2868 6.49958 2.2868Z"
            fill="#DCDDDC"
          />
          <path
            d="M6.49958 10.7129C6.14867 10.7129 5.86426 10.9973 5.86426 11.3482V12.3644C5.86426 12.7156 6.14867 13 6.49958 13C6.85048 13 7.1349 12.7156 7.1349 12.3644V11.3482C7.1349 10.9973 6.8502 10.7129 6.49958 10.7129Z"
            fill="#DCDDDC"
          />
          <path
            d="M9.47886 3.52083C9.23101 3.27269 9.23101 2.87054 9.47886 2.6224L10.1977 1.9036C10.4455 1.65575 10.8479 1.65575 11.0961 1.9036C11.3442 2.15174 11.3442 2.55418 11.0961 2.80203L10.3773 3.52083C10.1294 3.76897 9.72729 3.76897 9.47886 3.52083Z"
            fill="#DCDDDC"
          />
          <path
            d="M3.521 9.47941C3.27286 9.23098 2.87071 9.23098 2.62257 9.47941L1.90377 10.1979C1.65592 10.4458 1.65563 10.8485 1.90377 11.0964C2.15191 11.3442 2.55435 11.3442 2.8022 11.0964L3.521 10.3773C3.76914 10.1294 3.76914 9.72698 3.521 9.47941Z"
            fill="#DCDDDC"
          />
          <path
            d="M10.7129 6.5C10.7129 6.1491 10.9973 5.86469 11.3482 5.86469H12.3647C12.7156 5.86469 13 6.1491 13 6.5C13 6.85091 12.7156 7.13503 12.3647 7.13503H11.3482C10.9973 7.13503 10.7129 6.85091 10.7129 6.5Z"
            fill="#DCDDDC"
          />
          <path
            d="M2.2868 6.5C2.2868 6.1491 2.00239 5.86469 1.65148 5.86469H0.635319C0.284411 5.86469 0 6.1491 0 6.5C0 6.85091 0.284411 7.13503 0.635319 7.13503H1.65177C2.00239 7.13503 2.2868 6.85091 2.2868 6.5Z"
            fill="#DCDDDC"
          />
          <path
            d="M9.47907 9.47941C9.72721 9.23156 10.1296 9.23156 10.3775 9.47941L11.0963 10.1982C11.3444 10.4458 11.3444 10.8485 11.0963 11.0963C10.8482 11.3442 10.446 11.3442 10.1979 11.0963L9.47907 10.3775C9.23093 10.1294 9.23093 9.72726 9.47907 9.47941Z"
            fill="#DCDDDC"
          />
          <path
            d="M3.52111 3.52088C3.76925 3.27274 3.76925 2.87059 3.52111 2.62245L2.80231 1.90394C2.55417 1.6558 2.15202 1.6558 1.90388 1.90394C1.65574 2.15179 1.65574 2.55423 1.90388 2.80208L2.62268 3.52088C2.87082 3.76931 3.27297 3.76931 3.52111 3.52088Z"
            fill="#DCDDDC"
          />
        </svg>
        <div class="main-brightness__grid-group">
          <button class="main-brightness__grid-button">−</button>
          <button class="main-brightness__grid-button">+</button>
        </div>
      </div>
      <div class="main-brightness__grid-block">
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.24999 8.45487V2.49999C6.24999 1.11929 5.1307 0 3.75 0C2.3693 0 1.25001 1.11929 1.25001 2.49999V8.45484C0.482813 9.1415 0 10.1394 0 11.25C0 13.3211 1.67895 15 3.75 15C5.82105 15 7.5 13.3211 7.5 11.25C7.5 10.1394 7.01719 9.1415 6.24999 8.45487ZM3.75 13.75C2.3693 13.75 1.25001 12.6307 1.25001 11.25C1.25001 10.5282 1.5559 9.85863 2.08365 9.38628L2.50002 9.01362V2.49999C2.50002 1.80964 3.05968 1.24998 3.75003 1.24998C4.44038 1.24998 5.00004 1.80961 5.00004 2.49999V9.01362L5.41641 9.38628C5.94416 9.85863 6.25005 10.5282 6.25005 11.25C6.24999 12.6307 5.1307 13.75 3.75 13.75Z"
            fill="#DCDDDC"
          />
          <path d="M4.37501 5H3.125V12.5H4.37501V5Z" fill="#DCDDDC" />
          <path
            d="M3.75 13.125C4.78553 13.125 5.625 12.2855 5.625 11.25C5.625 10.2145 4.78553 9.375 3.75 9.375C2.71447 9.375 1.875 10.2145 1.875 11.25C1.875 12.2855 2.71447 13.125 3.75 13.125Z"
            fill="#DCDDDC"
          />
        </svg>
        <div class="main-brightness__grid-group">
          <button class="main-brightness__grid-button">−</button>
          <button class="main-brightness__grid-button">+</button>
        </div>
      </div>
      <div class="main-brightness__grid-block">
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 0C2.4603 0 0 2.4599 0 5.5C0 8.53969 2.4599 11 5.5 11C8.53969 11 11 8.5401 11 5.5C11 2.4603 8.5401 0 5.5 0ZM5.92969 10.1208V0.879162C8.2775 1.09332 10.1406 3.06591 10.1406 5.5C10.1406 7.93375 8.2778 9.90666 5.92969 10.1208Z"
            fill="#DCDDDC"
          />
        </svg>
        <div class="main-brightness__grid-group">
          <button class="main-brightness__grid-button">−</button>
          <button class="main-brightness__grid-button">+</button>
        </div>
      </div>
    </div>
  </div>
  <div class="main-filters">
    <div class="main-filters__grid">
      <button class="main-filters__grid-button">Tint</button>
      <button class="main-filters__grid-button">Gradient</button>
      <button class="main-filters__grid-button">Noise</button>
      <button class="main-filters__grid-button">Remove BG</button>
      <button class="main-filters__grid-button">HDR</button>
      <button class="main-filters__grid-button">B&W</button>
      <button class="main-filters__grid-button">Anti Glare</button>
      <button class="main-filters__grid-button">Teeth</button>
      <button class="main-filters__grid-button">Tan</button>
      <button class="main-filters__grid-button">Bokeh</button>
      <button class="main-filters__grid-button">Volume</button>
      <button class="main-filters__grid-button">Sharpness</button>
      <button class="main-filters__grid-button">Matte</button>
      <button class="main-filters__grid-button">Contrast</button>
      <button class="main-filters__grid-button">Vignette</button>
    </div>
  </div>
  <div class="main-layers">
    <h2 class="main-layers__title">Masks</h2>
    <div class="main-layers__grid">
      <button class="main-layers__grid-button">Red</button>
      <button class="main-layers__grid-button">Green</button>
      <button class="main-layers__grid-button">Blue</button>
    </div>
  </div>
</div>`

const color = `<div class="color">
<div class="main-filters">
  <h2 class="main-filters__title">Color Presets</h2>
</div>
<div class="main-mode">
  <div class="main-mode__group">
    <label for="mode" class="main-mode__label">Mode</label>
    <select id="mode" class="select-wrapper main-mode__select">
      <option value="vintage" selected>Vintage</option>
    </select>
  </div>
  <div class="main-mode__grid">
    <div class="main-mode__grid-block">
      <div class="main-mode__grid-item">
        <input type="radio" name="first" checked id="formMultiply" />
        <label for="formMultiply">Multiply</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="first" id="formLighten" />
        <label for="formLighten">Lighten</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="first" id="formScreen" />
        <label for="formScreen">Screen</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="first" id="formDodge" />
        <label for="formDodge">Linear Dodge</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="first" id="formOverlay" />
        <label for="formOverlay">Overlay</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="first" id="formSoft" />
        <label for="formSoft">Soft Light</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="first" id="formVivid" />
        <label for="formVivid">Vivid Light</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="first" id="formDifference" />
        <label for="formDifference">Difference</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="first" id="formSubtract" />
        <label for="formSubtract">Subtract</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="first" id="formColor" />
        <label for="formColor">Color</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="first" id="formLuminosity" />
        <label for="formLuminosity">Luminosity</label>
      </div>
    </div>
    <div class="main-mode__grid-block">
      <div class="main-mode__grid-item">
        <input type="radio" checked name="second" id="mode1" />
        <label for="mode1">Vintage 1</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode2" />
        <label for="mode2">Vintage 2</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode3" />
        <label for="mode3">Vintage 3</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode4" />
        <label for="mode4">Vintage 4</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode5" />
        <label for="mode5">Vintage 5</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode6" />
        <label for="mode6">Vintage 6</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode7" />
        <label for="mode7">Vintage 7</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode8" />
        <label for="mode8">Vintage 8</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode9" />
        <label for="mode9">Vintage 9</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode10" />
        <label for="mode10">Vintage 10</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode11" />
        <label for="mode11">Vintage 11</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode12" />
        <label for="mode12">Vintage 12</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode13" />
        <label for="mode13">Vintage 13</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode14" />
        <label for="mode14">Vintage 14</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode15" />
        <label for="mode15">Vintage 15</label>
      </div>
      <div class="main-mode__grid-item">
        <input type="radio" name="second" id="mode16" />
        <label for="mode16">Vintage 16</label>
      </div>
    </div>
  </div>
</div>
</div>`

const makeup = `<div class="makeup">
<div class="main-filters">
  <h2 class="main-filters__title">Makeup</h2>
  <div class="main-filters__grid">
    <button class="main-filters__grid-button">Eyelids</button>
    <button class="main-filters__grid-button">Iris</button>
    <button class="main-filters__grid-button">Brows</button>
    <button class="main-filters__grid-button">Hair</button>
    <button class="main-filters__grid-button">Blusher</button>
    <button class="main-filters__grid-button">Tone</button>
    <button class="main-filters__grid-button">Lips</button>
    <button class="main-filters__grid-button">Makeup</button>
    <button class="main-filters__grid-button">Lashes</button>
    <button class="main-filters__grid-button">Eyes</button>
    <button class="main-filters__grid-button">Auto Tone</button>
    <button class="main-filters__grid-button">No Pink</button>
    <button class="main-filters__grid-button">Glowing</button>
    <button class="main-filters__grid-button">Hair Light</button>
    <button class="main-filters__grid-button">LAB-C</button>
    <select class="select-wrapper">
      <option value="palettes" selected>Palettes</option>
      <option value="blusher">Blusher</option>
      <option value="eyelids">Eyelids</option>
      <option value="lips">Lips</option>
      <option value="hair">Hair</option>
      <option value="face">Face</option>
    </select>
  </div>
</div>
<div class="main-layers">
  <h2 class="main-layers__title">Color Correction</h2>
  <div class="main-layers__grid">
    <button class="main-layers__grid-button">Orange</button>
    <button class="main-layers__grid-button">Yellow</button>
    <button class="main-layers__grid-button">Red</button>
  </div>
</div>
</div>`

const index = `<div class="index">
<div class="main-filters">
  <h2 class="main-filters__title">Basic Operations</h2>
  <div class="main-filters__grid">
    <button class="main-filters__grid-button">New Doc</button>
    <button class="main-filters__grid-button">Place Doc</button>
    <button class="main-filters__grid-button">Duplicate</button>
    <button class="main-filters__grid-button">Apply Img</button>
    <button class="main-filters__grid-button">Image Size</button>
    <button class="main-filters__grid-button">Canvas Size</button>
    <button class="main-filters__grid-button">Sh/Highl</button>
    <button class="main-filters__grid-button">Filter G</button>
    <button class="main-filters__grid-button">Liquify</button>
    <button class="main-filters__grid-button">Dual</button>
    <button class="main-filters__grid-button">Transform</button>
    <button class="main-filters__grid-button">L-Style</button>
  </div>
</div>
<div class="main-options">
  <div class="main-options__block">
    <div class="button-crop">
      <span>
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00781 0.503296H2.20781C1.26893 0.503296 0.507812 1.26441 0.507812 2.2033V5.99999"
            stroke="#C7C7C7"
            stroke-linejoin="round"
          />
        </svg>
        Rotate
        <svg
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.503296H5.8C6.73888 0.503296 7.5 1.26441 7.5 2.2033V5.99999"
            stroke="#C7C7C7"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <div class="button-crop__group">
        <button class="main-options__button">-90&deg;</button>
        <button class="main-options__button">+90&deg;</button>
      </div>
    </div>
  </div>
  <div class="main-options__block">
    <button class="main-options__align">
      <svg
        width="16"
        height="13"
        viewBox="0 0 16 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="7.55859"
          y="7.44128"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 7.44128)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="11.1335"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 11.1335)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="3.74896"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 3.74896)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="9.28741"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 9.28741)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="12.9797"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 12.9797)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="5.59509"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 5.59509)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="1.90283"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 1.90283)"
          fill="#DCDCDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.921702 11.5604C0.748682 11.4892 0.635742 11.3206 0.635742 11.1335L0.635742 2.82585C0.635742 2.63876 0.748682 2.47018 0.921702 2.39901C1.09472 2.32784 1.29359 2.36816 1.42523 2.50109L5.53859 6.65494C5.71671 6.83481 5.71671 7.12458 5.53859 7.30445L1.42523 11.4583C1.29359 11.5912 1.09472 11.6315 0.921702 11.5604ZM1.55882 10.0115L4.5611 6.97969L1.55882 3.94786L1.55882 10.0115Z"
          fill="#DCDCDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.3646 11.1335C15.3646 11.3206 15.2516 11.4892 15.0786 11.5604C14.9056 11.6315 14.7067 11.5912 14.5751 11.4583L10.4617 7.30445C10.2836 7.12458 10.2836 6.83481 10.4617 6.65494L14.5751 2.50109C14.7067 2.36816 14.9056 2.32784 15.0786 2.39901C15.2516 2.47018 15.3646 2.63876 15.3646 2.82585L15.3646 11.1335Z"
          fill="#DCDCDC"
        />
      </svg>
    </button>
    <button class="main-options__align">
      <svg
        width="16"
        height="13"
        viewBox="0 0 16 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="7.55859"
          y="7.44128"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 7.44128)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="11.1335"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 11.1335)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="3.74896"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 3.74896)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="9.28741"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 9.28741)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="12.9797"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 12.9797)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="5.59509"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 5.59509)"
          fill="#DCDCDC"
        />
        <rect
          x="7.55859"
          y="1.90283"
          width="0.923077"
          height="0.923077"
          transform="rotate(-90 7.55859 1.90283)"
          fill="#DCDCDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.921702 11.5604C0.748682 11.4892 0.635742 11.3206 0.635742 11.1335L0.635742 2.82585C0.635742 2.63876 0.748682 2.47018 0.921702 2.39901C1.09472 2.32784 1.29359 2.36816 1.42523 2.50109L5.53859 6.65494C5.71671 6.83481 5.71671 7.12458 5.53859 7.30445L1.42523 11.4583C1.29359 11.5912 1.09472 11.6315 0.921702 11.5604ZM1.55882 10.0115L4.5611 6.97969L1.55882 3.94786L1.55882 10.0115Z"
          fill="#DCDCDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.3646 11.1335C15.3646 11.3206 15.2516 11.4892 15.0786 11.5604C14.9056 11.6315 14.7067 11.5912 14.5751 11.4583L10.4617 7.30445C10.2836 7.12458 10.2836 6.83481 10.4617 6.65494L14.5751 2.50109C14.7067 2.36816 14.9056 2.32784 15.0786 2.39901C15.2516 2.47018 15.3646 2.63876 15.3646 2.82585L15.3646 11.1335Z"
          fill="#DCDCDC"
        />
      </svg>
    </button>
  </div>
  <div class="main-options__block">
    <select class="select-wrapper">
      <option value="rgb" selected>RGB</option>
      <option value="cmyk">CMYK</option>
      <option value="gray">Gray</option>
      <option value="lab">LAB</option>
    </select>
    <select class="select-wrapper">
      <option value="8" selected>8 Bits</option>
      <option value="16">16 Bits</option>
      <option value="32">32 Bits</option>
    </select>
  </div>
</div>
<div class="main-export">
  <button class="main-export__button">Insta 4×5</button>
  <button class="main-export__button">Insta 1×1</button>
  <button class="main-export__button">Story</button>
  <button class="main-export__button">For Web</button>
  <button class="main-export__button">Save As</button>
  <button class="main-export__button">Sv&Cls</button>
</div>
</div>`

const controls = `<div class="controls">
<div class="main-filters">
  <h2 class="main-filters__title">Manual Control</h2>
  <div class="main-filters__grid">
    <span class="main-filters__label">Choose type:</span>
    <button class="main-filters__grid-button">High Pass</button>
    <button class="main-filters__grid-button">Median</button>
  </div>
</div>
<div class="main-ranges">
  <div class="main-ranges__block">
    <span class="main-ranges__label">Contrast</span>
    <input
      type="range"
      class="main-ranges__input"
      max="100"
      min="0"
      value="0"
    />
    <input
      type="number"
      class="main-ranges__number"
      max="100"
      min="0"
      value="0"
    />
  </div>
  <div class="main-ranges__block">
    <span class="main-ranges__label">Blur</span>
    <input
      type="range"
      class="main-ranges__input"
      max="100"
      min="0"
      value="0"
    />
    <input
      type="number"
      class="main-ranges__number"
      max="100"
      min="0"
      value="0"
    />
  </div>
  <div class="main-ranges__block">
    <span class="main-ranges__label">High Pass</span>
    <input
      type="range"
      class="main-ranges__input"
      max="100"
      min="0"
      value="0"
    />
    <input
      type="number"
      class="main-ranges__number"
      max="100"
      min="0"
      value="0"
    />
  </div>
  <div class="main-ranges__block">
    <span class="main-ranges__label">Opacity</span>
    <input
      type="range"
      class="main-ranges__input"
      max="100"
      min="0"
      value="0"
    />
    <input
      type="number"
      class="main-ranges__number"
      max="100"
      min="0"
      value="0"
    />
  </div>
</div>
<div class="main-actions">
  <div class="main-actions__block">
    <input type="checkbox" id="controlPreview" />
    <label for="controlPreview">Preview</label>
  </div>
  <div class="main-actions__block">
    <button class="main-actions__block-button">Auto</button>
    <button class="main-actions__block-button">Done</button>
  </div>
</div>
</div>`

const pages = {rt, tools, color, makeup, index, controls}

mainMenu.addEventListener('click', (e) => {
  let target = e.target.closest('button');
  if(!target || target.dataset.page == '#') return
  mainWindow.removeChild(mainWindow.children[0]);
  mainWindow.insertAdjacentHTML('afterbegin', pages[target.dataset.page])
  if(target.dataset.page === 'controls') {
    mainWindow.querySelectorAll('.main-ranges__input')
    .forEach(range => {
      range.addEventListener('input', function({target}) {
        this.nextElementSibling.value = Number(target.value)
      })
    })
    mainWindow.querySelectorAll('.main-ranges__number')
    .forEach(number => {
      number.addEventListener('change', function({target}) {
        let value = Number(target.value)

        if(value < +target.min) {
          value = +target.min
        } else if (value > +target.max) {
          value = +target.max
        }

        target.value = value
        this.previousElementSibling.value = value
      })
    })
  }
})