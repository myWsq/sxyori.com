<template>
	<v-container class="news">
        <bg-circle top='10%' left='30%' size="50px"></bg-circle>
        <bg-circle top='20%' left='50%' size="500px"></bg-circle>
		<h2>关注Yori公告 获取最新优惠信息</h2>
		<v-container fill-height class="pa-0" grid-list-xl>
			<v-layout row wrap>
				<v-flex xs12 md6 lg4 v-for="item in list" :key="item.id">
					<div class="item" @click="onItemClick(item)">
						<div class="item-image">
							<img :src="item.img" />
						</div>
						<div class="label-group">
							<span>{{ item.subTitle }}</span>
							<span>{{ $day(item.updatedAt).fromNow() }}</span>
						</div>
						<h3>{{ item.isTop ? '[置顶]' : '' }}{{ item.title }}</h3>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
		<v-dialog
			v-model="dialog"
			scrollable
			transition="dialog-transition"
			max-width="500px"
		>
			<v-card>
				<div class="dialog-content" v-if="curItem">
					<v-toolbar>
						<h3>{{ curItem.title }}</h3>
						<v-spacer></v-spacer>
						<v-btn flat color="white" icon @click="onDialogClose">
							<v-icon>clear</v-icon>
						</v-btn>
					</v-toolbar>
					<img :src="curItem.img" />
					<v-layout
						row
						wrap
						class="dialog-sub-title pa-3"
						align-center
						justify-space-between
					>
						<span>{{ curItem.subTitle }}</span>
						<span>{{ $day(curItem.createdAt).fromNow() }}</span>
					</v-layout>

					<p v-html="curItem.content" class="px-3"></p>
				</div>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
export default {
    head:{
        title:'新闻公告'
    },
	async asyncData({ $axios }) {
		const { data } = await $axios.get('/api/post')
		let list = []
		if (!data.code) {
			list = [
				...data.body.filter(item => item.isTop),
				...data.body.filter(item => !item.isTop)
			]
		}
		return {
			list
		}
	},
	data() {
		return {
			dialog: false,
			curItem: null
		}
	},
	methods: {
		onItemClick(item) {
			this.dialog = true
			this.curItem = item
		},
		onDialogClose() {
			this.dialog = false
		}
	}
}
</script>

<style lang="stylus" scoped>
h2 {
	margin-top: 8%;
	margin-bottom: 1em;
	text-align: center;
	position: relative;

	&::before {
		content: '';
		height: 2px;
		width: 2em;
		background: $primary-color;
		position: absolute;
		top: -0.5em;
		left: 50%;
		transform: translateX(-50%);
	}
}

h3 {
	line-height: 1;
	max-width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}

.news {
	height: 100%;
	display: flex;
	flex-direction: column;
}

.label-group {
	display: flex;
	justify-content: space-between;
	color: #4F5059;
	margin: 1em 0;
}

.item-image {
	height: 200px;
	overflow: hidden;
	position: relative;
    border-radius: 4px;

	&:hover {
		img {
			transform: translate(-50%, -50%) scale(1.1);
		}
	}

	img {
        border-radius: 4px;
		transition: 0.3s ease-in-out;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		transform: translate(-50%, -50%);
	}
}

.item {
	margin-bottom: 1em;
	cursor: pointer;
}

.dialog-sub-title {
	font-size: 0.8em;
}
</style>
