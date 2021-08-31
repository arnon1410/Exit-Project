  <template>
  <div>
     <v-simple-table>
    <thead>
      <tr class="teal darken-2">
        <th class="text-center">
          ประเภทกิจกรรม
        </th>
        <th class="text-center">
          ชื่อกิจกรมม
        </th>
        <th class="text-center">
          จำนวนโครงการ
        </th>
        <th class="text-center">
          จำนวนคณะทำงาน
        </th>
        <th class="text-center">
          จำนวนกิจกรรม
        </th>
        <th class="text-center">
          จำนวนหน่วยชั่วโมง
        </th>
      </tr>
    </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
          class="text-center"
        >
          <td>{{ item.type_ac }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.count_pro }}</td>
          <td>{{ item.count_pp }}</td>
          <td>{{ item.count_ac }}</td>
          <td>{{ item.count_time }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-list-item-content>
    <v-row>
      <v-col>
            <v-list-item-title class="text-right " >
                <strong class="mx-10 py-3">จำนวนกิจกรรมรวม : </strong>
            </v-list-item-title>
      </v-col>
    </v-row>
    </v-list-item-content>
  <!--เพิ่ม-->
</div>
</template>

<script>

export default {
  layout: 'Aftermain',
  data: () => ({
     desserts: [
      {
        type_ac: 'กิจกรรมมหาวิทยาลัย',
        name: 'XXXXXXXX',
        count_pro: '9',
        count_pp: '0',
        count_ac: '6(>=9)',
        count_time: '105',
      },
      {
       type_ac: 'กิจกรรมเพื่อสังคม',
        name: 'XXXXXXXX',
        count_pro: '3',
        count_pp: '0',
        count_ac: '6(>=3)',
        count_time: '35',
      },
     ],
    }),
  }
</script>
