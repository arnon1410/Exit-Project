  <template>
  <div>
  <v-row class="align-center layout px-4 pt-4 app--page-header">
    <v-col>
        <v-autocomplete
            v-model="value"
            :items="year"
      ></v-autocomplete>
    </v-col>
    <v-col>
        <v-autocomplete
            v-model="value"
            :items="team"
      ></v-autocomplete>
    </v-col>
     <v-col>
        <v-text-field
            v-model="model"
            :counter="max"
            :rules="rules"
            label="รหัสวิชา"
      ></v-text-field>
     </v-col>
     <v-col>
        <v-btn
      depressed
      color="teal darken-2"
    >
     <v-icon left>
        mdi-plus
      </v-icon>
      เพิ่ม
    </v-btn>
     </v-col>
  </v-row>
    <v-simple-table>

        <thead>
          <tr class="teal darken-2">
            <th class="text-center">
              รหัสวิชา
            </th>
            <th class="text-center">
              ชื่อวิชา
            </th>
             <th class="text-center">
              หน่วยกิต
            </th>
             <th class="text-center">
              เกรด
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
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.credit }}</td>
            <td>{{ item.grade }}</td>
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
              <strong class="mx-10 py-3">หน่วยกิตสะสม : </strong>
              <strong class="mx-10 py-3">หน่วยกิต </strong>
            </v-list-item-title>
      </v-col>
    </v-row>
    </v-list-item-content>
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
  <!--เพิ่ม-->

</template>

<script>

export default {
  layout: 'Aftermain',
  data: () => ({
    team: [
          'เทอม 1',
          'เทอม 2',
        ],
    year: [
          'ชั้นปีที่ 1',
          'ชั้นปีที่ 2',
          'ชั้นปีที่ 3',
          'ชั้นปีที่ 4',
        ],
    desserts: [
      {
        code: '01234567',
        name: 'XXXXXXXX',
        credit: '3',
        grade: 'A',
      },
      {
       code: '76543210',
        name: 'XXXXXXXX',
        credit: '3',
        grade: 'A',
      },
    ],

  }),
  }
</script>
