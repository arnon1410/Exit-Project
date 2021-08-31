<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              
              <h1 class="font-weight-light display-1 mb-3">Course
              </h1>
                  <v-card
                      :color="color"
                      class="mx-auto"
                      max-width="650"
                    >
                      <v-list>
                        <v-list-group
                          v-for="item in items"
                          :key="item.title"
                          v-model="item.active"
                          :prepend-icon="item.action"
                          no-action
                        >
                          <template v-slot:activator>
                            <v-list-item-content>
                              <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>
                          </template>

                          <v-list-item
                            v-for="child in item.items"
                            :key="child.title"
                          >
                          <v-list-item-icon>
                          <v-icon>{{ child.icon }}</v-icon>
                          </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title v-text="child.title"></v-list-item-title>
                              
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-group>
                      </v-list>
                    </v-card>
     
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                :src="require('@/assets/img/ill1.svg')"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
    layout: "NotLogin",
    props: {
    color:{
      type:String,
      required:true
    },
    flat: {
      type:Boolean,
      required:true
    }  
  },
 data () {
    return {
      items: [
        {
          action: 'mdi-ticket',
          title: 'คณะทรัพยากรธรรมชาติและอุตสาหกรรมเกษตร',
          active: false,
          items: [
            { title: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีการอาหาร', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาทรัพยากรเกษตร', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาอาหารปลอดภัยและโภชนาการ', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาทรัพยากรเกษตรและการจัดการการผลิต', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาประมง (สาขาเพาะเลี้ยงสัตว์น้ำ)', icon: 'mdi-ticket' },
          ]
        },
        {
          action: 'mdi-ticket',
          title: 'คณะวิทยาศาสตร์และวิศวกรรมศาสตร์',
          active: false,
          items: [
            { title: 'หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมไฟฟ้า', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมโยธา', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมเครื่องกลและการผลิต', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมอุตสาหการ', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเคมีประยุกต์', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาคณิตศาสตร์ประยุกต์', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมสิ่งแวดล้อมเพื่อการพัฒนาอย่างยั่งยืน', icon: 'mdi-ticket' },
          ]
        },
        {
          action: 'mdi-ticket',
          title: 'คณะศิลปศาสตร์และวิทยาการจัดการ',
          active: false,
          items: [
            { title: 'หลักสูตรรัฐประศาสนศาสตรบัณฑิต', icon: 'mdi-ticket' },
            { title: 'หลักสูตรนิติศาสตรบัณฑิต', icon: 'mdi-ticket' },
            { title: 'หลักสูตรบริหารธุรกิจบัณฑิต สาขาวิชาการเงิน', icon: 'mdi-ticket' },
            { title: 'หลักสูตรบริหารธุรกิจบัณฑิต สาขาวิชาการตลาด', icon: 'mdi-ticket' },
            { title: 'หลักสูตรบริหารธุรกิจบัณฑิต สาขาวิชาการจัดการ', icon: 'mdi-ticket' },
            { title: 'หลักสูตรศิลปศาสตรบัณฑิต สาขาวิชาการจัดการโรงแรมและท่องเที่ยว', icon: 'mdi-ticket' },
            { title: 'หลักสูตรบัญชีบัณฑิต', icon: 'mdi-ticket' },
            { title: 'หลักสูตรศิลปศาสตรบัณฑิต สาขาวิชาภาษาอังกฤษ', icon: 'mdi-ticket' },
          ]
        },
        {
          action: 'mdi-ticket',
          title: 'คณะสาธารณสุขศาสตร์',
          active: false,
          items: [
            { title: 'หลักสูตรสาธารณสุขศาสตรบัณฑิต', icon: 'mdi-ticket' },
            { title: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาอนามัยสิ่งแวดล้อม', icon: 'mdi-ticket' }
            
          ]
        },

      ]
    }
  },
}
</script>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
