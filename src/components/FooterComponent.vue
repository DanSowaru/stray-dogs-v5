<template>
  <footer id="game-footer">
    <nav id="game-menu">
      <router-link to="/chat">
        <button class="footer-button" type="button">
          <img class="button-icon" src="@/assets/images/icons/mail_icon.png" alt="Mail" />
          <span class="button-text">
            Mail
          </span>
        </button>
      </router-link>
      <router-link to="/about">
        <button class="footer-button" type="button">
          <img class="button-icon" src="@/assets/images/icons/personel_icon_2.png" alt="Personel" />
          <span class="button-text">
            Personel
          </span>
        </button>
      </router-link>
    </nav>
  </footer>
</template>
