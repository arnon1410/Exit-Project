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
    </v-list>

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

      <v-menu offset-y origin="center center" :nudge-right="140" :nudge-bottom="10" transition="scale-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        icon
        v-on="on"
        
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items2"
        :key="index"
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
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      miniVariant: false,
      title1: 'Kasetsart University',
      items: [
        {
          icon: 'mdi-tools',
          color: '',
          items: [
            { title: 'ตรวจสอบผลการเรียน',icon: 'mdi-tools', to: '/Course/Check_course'},
            { title: 'ผลการเรียนของนิสิต',icon: 'mdi-tools', to: '/Course/Sum_course'},
          ],
          title: 'หลักสูตร',
        },
        {
          icon: 'mdi-tools',
          color: '',
          items: [
            { title: 'กิจกรรมมหาวิทยาลัย',icon: 'mdi-tools', to: '/Activity/At_Ku'},
            { title: 'เสริมสมรรถนะ',icon: 'mdi-tools', to: '/Activity/At_Ep'},
            { title: 'เพื่อสังคม',icon: 'mdi-tools', to: '/Activity/At_Fs'},
            { title: 'สรุปผล',icon: 'mdi-tools', to: '/Activity/Sum_At'},
          ],
          title: 'ชั่วโมงกิจกรรม',
        },
        {
          icon: 'mdi-tools',
          color: '',
          items: [
            { title: 'ใบเสร็จรับเงิน(KU2)', to: ''},
            { title: 'KU3 Online', to: ''},
          ],
          title: 'เอกสารหลักสูตร',
        },
        {
          icon: 'mdi-tools',
          color: '',
          items: [
            { title: 'ระบบสารสนเทศ', to: ''},
            { title: 'เพิ่ม-ถอนรายวิชา(KU4)', to: ''},
            { title: 'นิสิตที่ลงทะเบียน(KU8)', to: ''},
            { title: 'ตรวจสอบห้องสอบ', to: ''},
          ],
          title: 'อื่่น ๆ',
        },      
      ],

      items2: [
      { 
        title: 'Profile', 
        icon: 'mdi-account',
      },
      { 
        title: 'Settings',
        icon: 'mdi-calendar',
      },
      { 
        title: 'Logout',
        icon: 'mdi-delete',
      }
    ],
  }
    },
   methods: {
    handleClick(index) {
      this.items2[index].click.call(this)
    }
  },
}
</script>
