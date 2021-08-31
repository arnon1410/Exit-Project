  <template>
  <div>
  <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" max-width="600" >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="teal darken-2" v-bind="attrs" v-on="on">
            <v-icon left>mdi-plus</v-icon>
            เพิ่ม</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-card-title
                color="teal darken-2"
                dark
              >เพิ่มชั่วโมงกิจกรรม</v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="name" label="ชื่อกิจกรรม" type="text"></v-text-field>
                  <v-text-field v-model="email" label="จำนวนกิจกรรม(ชั่วโมง)" type="text"></v-text-field>
                  <v-autocomplete v-model="value" label="ประเภทกิจกรรม" :items="type_activity"></v-autocomplete>
                </v-form>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn color="blue" class="login-button" @click="summit" > บันทึก </v-btn>
                <v-btn color="red" class="login-button" @click="dialog.value = false" > ยกเลิก </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
  <v-divider></v-divider>
  <v-simple-table>
    <thead>
      <tr class="teal darken-2">
        <th class="text-center">
          ชื่อกิจกรมม
        </th>
        <th class="text-center">
          จำนวนกิจกรรม
        </th>
        <th class="text-center">
          ประเภทกิจกรรม
        </th>
        <th class="text-center">
          Action
        </th>
      </tr>
    </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
          class="text-center"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.count }}</td>
          <td>{{ item.type_ac }}</td>
          <td>
            <v-btn class="ma-2" text icon color="dark">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="ma-2" text icon color="dark">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>

    </v-simple-table>
    <v-list-item-content>
    <v-row>
      <v-col>
            <v-list-item-title class="text-right " >
                <strong class="mx-10 py-3">ผลรวม : </strong>
            </v-list-item-title>
      </v-col>
    </v-row>
    </v-list-item-content>
  </div>
</template>

<script>

export default {
  layout: 'Aftermain',
  data: () => ({
     desserts: [
      {
        name: 'XXXXXXXX',
        count: '9',
        type_ac: 'กิจกรรมมหาวิทยาลัย',
      },
      {
        name: 'XXXXXXXX',
        count: '3',
        type_ac: 'กิจกรรมเพื่อสังคม',
      },
     ],
      type_activity: [
          'กิจกรรมมหาวิทยาลัย',
          'กิจกรรมเพื่อสังคม',
          'กิจกรรมเสริมสมรรถนะ',
        ],
    }),
    methods: {
      submit () {
        /* เพิ่ม */
      },
    }
  }
</script>
