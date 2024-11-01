<script>
	import Roadmap from '../../assets/_roadmap.png';
	import Bg from '../../assets/rose_red.svg';

	export let items = [
		{
			float: 'left',
			company: 'Loacal: Development',
			time: '2024 - 2025',
			description: `Expanding service with new pages and building social communities. Instagram and twitter are main focus.
			It is also a time to expand service and enable users to log and post their stories in a simple and modern form. Forming mission and values of a project.
			Rising founds for development and further campain.`,
			backgroundColor: '#5a5a5a',
			flagColor: 'rgb(203, 47, 116);',
			timeColor: '#333'
		},
		{
			float: 'right',
			company: 'Local: Promoting Human rights locally',
			time: '2025 - 2026',
			description: `It is said to fight not with the weapons but with books.Stickers promoting human rights and Small prints with qoutes and human rights will be distributed among area in social places and on the streets.This is also a phase of collecting material for youtube channel.`,
			backgroundColor: '#5a5a5a',
			flagColor: 'rgb(203, 47, 116);',
			timeColor: '#333'
		},
		{
			float: 'left',
			company: 'Local: Legal Advocacy for Human Rights',
			time: '2026 - 2027',
			description: `Expanding youtube channel with new vidos with specialists and guests. Taking in the concideration legal advocacy. Continue on small acts of promotion.`,
			backgroundColor: '#5a5a5a',
			flagColor: 'rgb(203, 47, 116);',
			timeColor: '#333'
		},
		{
			float: 'right',
			company: 'Local: Global Human Rights Conference',
			time: '2027',
			description: `Host a global human rights conference or at least YT event, inviting thought leaders, activists, 
                    and community representatives from around the world to share insights and solutions 
                    on how local actions can contribute to peace and justice globally.`,
			backgroundColor: '#5a5a5a',
			flagColor: 'rgb(203, 47, 116);',
			timeColor: '#333'
		},
		{
			float: 'left',
			company: 'Global: Partnerships with International Organizations and artists',
			time: '2028',
			description: `Establish partnerships with international human rights organizations to foster 
                    collaboration between local and global entities. These partnerships will ensure that 
                    local initiatives align with global efforts to achieve lasting peace and human rights protection.`,
			backgroundColor: '#5a5a5a',
			flagColor: 'rgb(203, 47, 116);',
			timeColor: '#333'
		},
		{
			float: 'right',
			company: 'Global: Feedback and move to global',
			time: '2029 - 2030',
			description: `Implement peacebuilding initiatives that focus on conflict resolution, dialogue, 
                    and mediation within local communities. These initiatives will serve as models for 
                    global peace efforts, demonstrating how local peacekeeping can have a worldwide impact.`,
			backgroundColor: '#5a5a5a',
			flagColor: 'rgb(203, 47, 116);',
			timeColor: '#333'
		}
	];
</script>

<br /><br />
<div class="top"><img class="image-top" src={Roadmap} alt="Peace" /></div>
<center>
	<p>
		<i>
			"We cannot interfere in one area of the ecosystem without paying due attention to both the
			consequences of such interference in other areas and to the well-being of future generations."
		</i>
	</p>
	<i>John Paul II, 1990 World Day of Peace Message, no.</i>
</center>

<br />
<br />

<ul class="timeline-container">
	{#each items as item, index}
		<li class="timeline-item">
			<div class="direction-wrapper" style="--float: {item.float};">
				<div class="flag-wrapper">
					<span class="flag" style="--background-color: {item.backgroundColor};">
						{item.company}
					</span>
					<span class="time-wrapper" style="--time-color: {item.timeColor};">
						{item.time}
					</span>
				</div>
				<div
					class="flag-before"
					style="--flag-color: {item.flagColor}; --float-left: {item.float === 'left'
						? '-36px'
						: 'auto'}; --float-right: {item.float === 'right' ? '-37px' : 'auto'};"
				/>
				<div
					class="flag-after"
					style="--background-color-left: {item.float === 'left'
						? item.backgroundColor
						: 'transparent'}; --background-color-right: {item.float === 'right'
						? item.backgroundColor
						: 'transparent'}; --flag-after-left: {item.float === 'left'
						? '100%'
						: 'auto'}; --flag-after-right: {item.float === 'right' ? '100%' : 'auto'};"
				/>
			</div>
			<div class="desc" style="--desc-float: {item.float === 'right' ? 'left' : 'right'};">
				{item.description}
			</div>
		</li>
	{/each}
</ul>
<img class="imageUrl1" src={Bg} alt="Peace" />
<br />
<br />

<style>
	@media (max-width: 900px) {
		.timeline-container::after {
			display: none;
		}
	}

	.imageUrl1 {
		position: fixed;
		bottom: -10%;
		left: 55%;
		opacity: 0.071;
		z-index: -1;
		right: 0;
		width: 30vw;
	}
	.top {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.image-top {
		width: 220px;
		margin: auto;
	}

	i {
		font-size: 0.8rem;
	}

	.hidden {
		visibility: hidden;
	}

	.timeline-container {
		position: relative;
		width: 660px;
		margin: 0 auto;
		margin-top: 20px;
		padding: 1em 0;
		list-style-type: none;
	}

	.timeline-container::after {
		content: '';
		position: absolute;
		height: 100%;
		border-right: 3px solid #5a5a5a !important;
		top: 0;
		left: calc(50% - 2px);
		z-index: 0;
	}

	.timeline-item {
		padding: 1em 0;
		overflow: hidden;
	}

	.flag-wrapper {
		position: relative;
		display: flex;
		flex: column;
		flex-direction: column;
	}

	.flag {
		position: relative;
		display: inline;
		color: #cb2f74 !important;
		padding: 6px 10px;
		border-radius: 5px;
		font-weight: 600;
		text-align: center;
		z-index: 1;
		justify-content: center;
		display: flex;
	}

	.direction-wrapper {
		position: relative;
		width: 300px;
		float: var(--float);
		display: flex;
		justify-content: center;
	}

	.flag-before {
		position: absolute;
		top: 50%;
		right: var(--float-left);
		left: var(--float-right);
		content: ' ';
		display: block;
		width: 12px;
		height: 12px;
		margin-top: -10px;
		background: #5a5a5a !important;
		border-radius: 10px;
		z-index: 10;
	}

	.flag-after {
		content: '';
		position: absolute;
		left: var(--flag-after-left);
		right: var(--flag-after-right);
		top: 50%;
		height: 0;
		width: 0;
		margin-top: -8px;
		border: solid transparent;
		border-left-color: var(--background-color-left);
		border-right-color: var(--background-color-right);
		border-width: 8px;
		pointer-events: none;
	}

	.time-wrapper {
		display: flex;
		line-height: 1em;
		font-size: 0.66666em;
		color: var(--time-color);
		justify-content: center;
	}

	.desc {
		margin: 1em 0 0 0;
		font-size: 0.77777em;
		font-style: italic;
		line-height: 1.5em;
		max-width: 45%;
		z-index: 1;
		float: var(--desc-float);
	}

	@media screen and (max-width: 660px) {
		.timeline-container {
			width: 100%;
			padding: 4em 0 1em 0;
		}

		.direction-wrapper {
			float: none;
			width: 100%;
			text-align: center;
		}

		.time-wrapper {
			display: block;
			position: relative;
			margin: 4px 0 0 0;
			z-index: 14;
		}

		.desc {
			position: relative;
			margin: 1em 0 0 0;
			padding: 1em;
			background: rgb(245, 245, 245);
			box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
			z-index: 15;
			max-width: 100%;
		}
	}
</style>
