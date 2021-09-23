<template>
  <div>
    <v-row class="align-center layout px-4 pt-4 app--page-header">
      <div class="page-header-center">
        <h3 class="pr-3">หลักสูตรวิศวกรรมศาสตร์บัญทิต สาขาวิศวกรรมคอมพิวเตอร์ ระดับปริญญาตรี</h3>
      </div>
    </v-row>
    <v-row>
    <v-col>
      <v-expansion-panels >
          <v-expansion-panel>
            <v-expansion-panel-header class="teal darken-2">หมวดหมวดวิชาเฉพาะ ไม่น้อยกว่า 111 หน่วยกิต</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-col>
              <v-simple-table>
                <thead>
                  <tr class="teal darken-3">
                    <th class="text-center">
                      ลำดับที่
                    </th>
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
                      ผลการเรียน
                    </th>
                    <th class="text-center">
                      ระดับคะแนน
                    </th>
                  </tr>
                </thead>
              </v-simple-table>
              <v-list-item-title class="px-4 teal darken-2" >วิชาเฉพาะด้าน 55 หน่วยกิต</v-list-item-title>
              <v-list-item-title class="px-4 teal darken-1" >กลุ่มเพื่องานประยุกต์ 3 หน่วยกิต</v-list-item-title>
              <v-simple-table>
                <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
               <v-list-item-title class="px-4 teal darken-1" >กลุ่มเทคโนโลยีและวิธีทางซอฟต์แวร์ 10 หน่วยกิต</v-list-item-title>
                <v-simple-table>
                  <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
                </v-simple-table>
                <v-list-item-title class="px-4 teal darken-1" >กลุ่มโครงสร้างพื้นฐานของระบบ 14 หน่วยกิต</v-list-item-title>
                <v-simple-table>
                  <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
                </v-simple-table>
                <v-list-item-title class="px-4 teal darken-1" >กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์ 20 หน่วยกิต</v-list-item-title>
                <v-simple-table>
                  <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
                </v-simple-table>
                <v-list-item-title class="px-4 teal darken-1" >กลุ่มทักษะวิชาชีพและจรรยาบรรณ 8 หน่วยกิต</v-list-item-title>
                <v-simple-table>
                  <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
                </v-simple-table>
                 <v-list-item-title class="px-4 teal darken-2" >วิชาแกน 40 หน่วยกิต</v-list-item-title>
              <v-list-item-title class="px-4 teal darken-1" >วิชาแกนทางวิทยาศาสตร์และคณิตศาสตร์ 21 หน่วยกิต</v-list-item-title>
              <v-simple-table>
                <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
               <v-list-item-title class="px-4 teal darken-1" >วิชาแกนทางวิศวกรรม 19 หน่วยกิต</v-list-item-title>
                <v-simple-table>
                  <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
                </v-simple-table>
                <v-list-item-title class="px-4 teal darken-2" >วิชาเฉพาะเลือก 16 หน่วยกิต</v-list-item-title>
                <v-simple-table>
                  <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
                </v-simple-table>
              </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="teal darken-2" >หมวดศึกษาทั่วไป ไม่น้อยกว่า 30 หน่วยกิต</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-col>
              <v-simple-table>
                <thead>
                  <tr class="teal darken-2">
                    <th class="text-center">
                      ลำดับที่
                    </th>
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
                      ผลการเรียน
                    </th>
                    <th class="text-center">
                      ระดับคะแนน
                    </th>
                  </tr>
                </thead>
              </v-simple-table>
              <v-list-item-title class="px-4 teal darken-1" >กลุ่มสาระอยู่ดีมีสุข 6 หน่วยกิต</v-list-item-title>
              <v-simple-table>
                <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
               <v-list-item-title class="px-4 teal darken-1" >กลุ่มสาระศาสตร์แห่งผู้ประกอบการ 3 หน่วยกิต</v-list-item-title>
                <v-simple-table>
                  <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
                </v-simple-table>
                <v-list-item-title class="px-4 teal darken-1" >กลุ่มสาระภาษากับการสื่อสาร 13 หน่วยกิต</v-list-item-title>
                <v-simple-table>
                  <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
                </v-simple-table>
                <v-list-item-title class="px-4 teal darken-1" >กลุ่มสาระพลเมืองไทยและพลเมืองโลก 5 หน่วยกิต</v-list-item-title>
                <v-simple-table>
                  <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
                </v-simple-table>
                <v-list-item-title class="px-4 teal darken-1" >กลุ่มสาระสุนทรียศาสตร์ 3 หน่วยกิต</v-list-item-title>
                <v-simple-table>
                  <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
                </v-simple-table>
              </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="teal darken-2">หมวดวิชาเลือกเสรี ไม่น้อยกว่า 6 หน่วยกิต</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-col>
              <v-simple-table>
                <thead>
                  <tr class="teal darken-2">
                    <th class="text-center">
                      ลำดับที่
                    </th>
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
                      ผลการเรียน
                    </th>
                    <th class="text-center">
                      ระดับคะแนน
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in free"
                    :key="item.name"
                    class="text-center"
                  >
                    <td>{{ item.num }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.count_g }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
              </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    </v-row>
    <v-list-item-content>
    <v-row>
      <v-col>
            <v-list-item-title class="text-right " >
              <strong class="mx-10 py-3">จำนวนหน่วยกิตสะสม : </strong>
              <strong class="mx-10 py-3">147 </strong>
              <!--เพิ่มโค้ดรับค่า-->
              <strong class="mx-10 py-3">หน่วยกิต </strong>
            </v-list-item-title>
      </v-col>
    </v-row>
    </v-list-item-content>
     <v-list-item-content>
    <v-row>
      <v-col>
            <v-list-item-title class="text-right " >
              <strong class="mx-10 py-3">จำนวนหน่วยกิตคงเหลือ : </strong>
              <strong class="mx-10 py-3">0 </strong>
              <!--เพิ่มโค้ดรับค่า-->
              <strong class="mx-10 py-3">หน่วยกิต </strong>
            </v-list-item-title>
      </v-col>
    </v-row>
    </v-list-item-content>
     <v-list-item-content>
    <v-row>
      <v-col>
            <v-list-item-title class="text-right " >
                <strong class="mx-10 py-3">รวมเกรดเฉลี่ยสะสม : </strong>
                <strong class="mx-10 py-3">4.00 </strong>
                <!--เพิ่มโค้ดรับค่า-->
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
        num: '1',
        code: '0120XXXX',
        name: 'ระบบฐานข้อมูล',
        credit: '3',
        grade: 'A',
        count_g: '4.00',
      }
     ],
     tuat: [
      {
        num: '1',
        code: '0120XXXX',
        name: 'กิจกรรมพละศึกษา',
        credit: '3',
        grade: 'A',
        count_g: '4.00',
      }
     ],
     free: [
      {
        num: '1',
        code: '0120XXXX',
        name: '',
        credit: '3',
        grade: 'A',
        count_g: '4.00',
      },
      {
        num: '2',
        code: '',
        name: '',
        credit: '3',
        grade: 'A',
        count_g: '4.00',
      },
     ],
  }),
  }
</script>
