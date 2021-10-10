<template>
  <v-app dark >

<!--Sidebar-->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      dark
      app
      width="260"
      class=" teal darken-2"
    >
    <v-list >
      <v-list-item to='/Dashboard'>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>

         <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        color="black"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-icon>
            <v-icon  :color="item.color">{{item.icon}}</v-icon>
           </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          :to="child.to"
          router
          exact
        >
          <v-list-item-content >
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
      <template v-slot:append>
      <div class="pa-5" >
        <v-btn
         block
         color="error"
         @click="Logout"
        >
          <v-icon
            left
            dark
            

          >
            mdi-logout-variant
          </v-icon>
          Logout
        </v-btn>
        </div>
      </template>
    </v-navigation-drawer>


<!--appbar-->
    <v-app-bar
      class=" teal darken-2"
      :clipped-left="clipped"
      fixed
      app
      dark
      :class="{ expand: flat }"
    >
      <v-app-bar-nav-icon @click.stop="clipped = !clipped" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

        <v-list-item-avatar rounded >
            <img src="@/assets/img/logo_ku.png" alt="Logo" />
          </v-list-item-avatar>
      <v-list-item>
      <v-toolbar-title color="lightpink" v-text ="title1" />
      </v-list-item>
      <v-spacer />

      <v-menu bottom min-width="200px" rounded offset-y>
        <template #activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar size="48">
              <img
                src="https://images.news18.com/ibnlive/uploads/2021/07/1627371749_jungkook.jpg"
                alt="๋JK"
              />
            </v-avatar>
          </v-btn>
        </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items2"
        :key="index"
        :to="item.to"
        @click="handleClick(index)"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>

    </v-app-bar>
    <v-main>
      <v-container >
        <Nuxt />
      </v-container>
    </v-main>


<!--Profile-->


<!--Footer-->
    <v-footer
      class=" teal darken-2"
      :absolute="!fixed"
      dark
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({

      flat: false,
      clipped: true,
      drawer: true,
      fixed: false,
      miniVariant: false,
      title1: 'Kasetsart University',
      items: [
        {
          icon: 'mdi mdi-book-open-variant',
          color: '',
          items: [
            { title: 'ตรวจสอบผลการเรียน',icon: 'mdi-tools', to: '/Course/Check_course'},
            { title: 'ผลการเรียนของนิสิต',icon: 'mdi-tools', to: '/Course/Sum_course'},
          ],
          title: 'หลักสูตร',
        },
        {
          icon: 'mdi-calendar-clock',
          color: '',
          items: [
            { title: 'กิจกรรมมหาวิทยาลัย',icon: 'mdi-tools', to: '/Activity/At_Ku'},
            { title: 'สรุปผล',icon: 'mdi-tools', to: '/Activity/Sum_At'},
          ],
          title: 'ชั่วโมงกิจกรรม',
        },
        {
          icon: 'mdi-book-multiple',
          color: '',
          items: [
            { title: 'หลักสูตร ปี 2556', icon: 'mdi-tools', link: 'https://web.facebook.com/groups/nisitkuse' },
            { title: 'หลักสูตร ปี 2560', icon: 'mdi-tools', link: 'https://web.facebook.com/groups/nisitkuse' },
            { title: 'ใบเสร็จรับเงิน(KU2)', link: 'https://web.facebook.com/groups/nisitkuse'},
            { title: 'KU3 Online', link: 'https://web.facebook.com/groups/nisitkuse'},
          ],
          title: 'เอกสารหลักสูตร',
        },
        {
          icon: 'mdi-web',
          color: '',
          items: [
            { title: 'ระบบสารสนเทศ', link: 'https://web.facebook.com/groups/nisitkuse'},
            { title: 'เพิ่ม-ถอนรายวิชา(KU4)', link: 'https://web.facebook.com/groups/nisitkuse'},
            { title: 'นิสิตที่ลงทะเบียน(KU8)', link: 'https://web.facebook.com/groups/nisitkuse'},
            { title: 'ตรวจสอบห้องสอบ', link: 'https://web.facebook.com/groups/nisitkuse'},
          ],
          title: 'อื่น ๆ',
        },
      ],

      items2: [
      {
          icon: 'mdi-account',
          title: 'Profile',
          to: '/Profile/Profile'
        },
        {
          title: 'Settings',
          icon: 'mdi-calendar',
          to: '/Profile/Setting'
        },
        {
          title: 'Logout',
          icon: 'mdi-logout-variant',
          to: '/Profile/Logout'
        }
    ],
  }),

   methods: {
    handleClick(index) {
      this.items2[index].click.call(this)
    },
     async Logout() {
      await this.$auth.logout()
      }
  }
}
</script>
