<template>
	<div>
		<header>
			<p>入学日期: {{ intentedAt }}</p>
			<p>毕业日期: {{ gradutedAt }}</p>
		</header>
		<h3>成绩统计</h3>
		<table border>
			<tr>
				<th width="70%">课程名称</th>
				<th>课程成绩</th>
			</tr>
			<tr v-for="item in list" :key="item.id">
				<td width="70%">{{ item.course.name }}</td>
				<td class="grade" :class="{ pass: item.grade >= 60 }">
					{{ item.grade }}
				</td>
			</tr>
		</table>

		<v-btn color="primary" :disabled="!isPassed" large class="ma-0 mt-4"
			>下载毕业证书</v-btn
		>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	head: {
		title: '学习进度'
	},
	async asyncData({ $axios }) {
		const { data } = await $axios.get('/api/user/course')
		return {
			list: data.body
		}
	},
	computed: {
		...mapState(['me']),
		intentedAt() {
			return (this.me.intendedAt && this.$day(this.me.intendedAt)) || '未入学'
		},
		gradutedAt() {
			return (this.me.gradutedAt && this.$day(this.me.gradutedAt)) || '未毕业'
		},
		isPassed() {
			return this.list.every(item => item.grade >= 60)
		}
	}
}
</script>

<style lang="stylus" scoped>
header {
	padding: 2em 0;
}

h3 {
	margin-bottom: 1em;
}

table {
	width: 500px;
	border: 1px solid;
	border-collapse: collapse;
	text-align: center;
	color: #DCDCDC;

	th, td {
		padding: 10px;
	}

	th {
		font-weight: 400;
	}

	td {
		font-weight: 600;

		&.grade {
			color: red;
		}

		&.pass {
			color: #37C0A4;
		}
	}
}
</style>
