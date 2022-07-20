<template>
  <div class="content" style="width:100vw;">
    <h1>User table page</h1>

    <table style="background-color: #e9e9e9; width:100vw;">
      <tbody>
        <tr v-for="user in userList">
          <td style="border-bottom: 1px solid #000;">
            <UserInfo :user="user"> </UserInfo>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <span @click="prevPage">&laquo;</span>
      <span @click="paging(i)" v-for="i in pageNum" :key="i" :class="i === currPage ? 'active' : ''">{{ i }}</span>
      <span @click="nextPage">&raquo;</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserInfo from '~/components/_userInfo.vue'

const userList = ref([])

//pagination
const currPage = ref(1);
const totalCnt = ref(0);
const limit = 2;
const pageNum = ref(computed(() => Math.ceil(totalCnt.value / limit)))
const offset = ref(computed(() => (currPage.value - 1) * limit))

async function fetch() {

  const payload = {
    limit: limit,
  }
  const res = await useFetchData('get', '/user/list', payload)

  const { data } = res;
  userList.value = data.list.slice(offset.value, limit + offset.value);

  totalCnt.value = data.total;


}

function prevPage() {
  if (currPage.value !== 1) {
    currPage.value--;
    fetch()
  }
}
function nextPage() {
  if (currPage.value !== pageNum.value) {
    currPage.value++;
    fetch()
  }
}

function paging(clickedPage: number) {
  currPage.value = clickedPage
  fetch()

}


onMounted(() => {
  fetch()
})


</script>
<style scoped lang="scss">
.content {
  height: calc(100vh - 100px);
}

.pagination span {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
}

/* Style the active/current link */
.pagination span.active {
  background-color: dodgerblue;
  color: white;
}

/* Add a grey background color on mouse-over */
.pagination span:hover:not(.active) {
  background-color: #ddd;
}
</style>