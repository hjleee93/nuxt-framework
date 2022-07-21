<template>
  <div class="content" style="width:100vw;">
    <h1>User table page</h1>
    <table style="background-color: #e9e9e9; width:100vw;">
      <tbody>
        <template v-if="!isPending">
          <tr v-for="user in userList">
            <td style="border-bottom: 1px solid #000;">
              <UserInfo :user="user"> </UserInfo>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr v-for="sk in 2">

            <td style="border-bottom:1px solid #000">
              <UserInfoSk />
            </td>
          </tr>
        </template>
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
const userList = ref([])

//pagination
const currPage = ref(1);
const totalCnt = ref(1);
const limit = 2;
const pageNum = ref(computed(() => Math.ceil(totalCnt.value / limit)))
const offset = ref(computed(() => (currPage.value - 1) * limit))
const isPending = ref(false);

async function fetch() {
  const delay = (ms: number) => new Promise((_) => setTimeout(_, ms))

  const payload = {
    limit: limit,
  }
  isPending.value = true
  await delay(3000)

  const res = await useFetchData('get', '/user/list', payload)
  isPending.value = false
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