<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Carousel from '$lib/components/Carousel.svelte';

	import PageHead from '$lib/components/PageHead.svelte';

	import { LL } from '../i18n/i18n-svelte';
	import imageUrl1 from '../assets/1.svg';
	import imageUrl2 from '../assets/2.svg';
	import imageUrl3 from '../assets/3.svg';
	import imageUrl5 from '../assets/5.svg';
	import imageUrl6 from '../assets/6.svg';
	import Hash from '../assets/hash.svg';
	import STW from '../assets/_STW.png';
</script>

<div>
	<PageHead title="Home" description="An awesome blog about development with Svelte" />
	<br /><br />
	<Carousel {data} />
	<center>
		<p><i>{$LL.ARISTOTELE_1()}</i></p>
		<i>{$LL.ARISTOTELE_NAME()}</i>
	</center>
	<div class="slogan">HUMAN RIGHTS DECLARATION</div>
	<br /><br />
	<details>
		<summary>{$LL.INTRO().substring(0, 232)}...</summary>
		<p>{$LL.INTRO()}</p>
	</details>
	<br /><br />
	<div class="box">
		<h2>
			{$LL.ARTICLE_TITLE()} <span>1.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />Dignity</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />EqualRights</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />BrotherhoodSpirit</div>
		</h2>
		<p>{$LL.ARTICLE_1()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>2.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />BasicLifeRight</div>
		</h2>
		<p>{$LL.ARTICLE_2()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>3.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />PopleEqality</div>
			<div class="row">
				<img class="hash" src={Hash} alt="Peace" />EmmbraceDifference
			</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />SovereigntyJustice</div>
		</h2>
		<p>{$LL.ARTICLE_3()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>4.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />SlaveryAlert</div>
		</h2>
		<p>{$LL.ARTICLE_4()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>5.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />TortureAlert</div>
		</h2>
		<p>{$LL.ARTICLE_5()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>6.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />ToBePerson</div>
		</h2>
		<p>{$LL.ARTICLE_6()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>7.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />LawEquality</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />DiscriminationProtection</div>
		</h2>
		<p>{$LL.ARTICLE_7()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>8.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />FundamentalRightsProtection</div>
		</h2>
		<p>{$LL.ARTICLE_8()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>9.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />NotArbitraryArrest</div>
		</h2>
		<p>{$LL.ARTICLE_9()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>10.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />TribunalEquality</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />Independent</div>
		</h2>
		<p>{$LL.ARTICLE_10()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>11.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />InnocencePresumption</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />MinimalArrestPenalty</div>
		</h2>
		<p>{$LL.ARTICLE_11()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>12.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />Privacy</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />CorrespondetionPrivacy</div>
		</h2>
		<p>{$LL.ARTICLE_12()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>13.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />FredomOfMovemnt</div>
		</h2>
		<p>{$LL.ARTICLE_13()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>14.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />AsylumRight</div>
		</h2>
		<p>{$LL.ARTICLE_14()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>15.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />NationalityRight</div>
		</h2>
		<p>{$LL.ARTICLE_15()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>16.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />MarrigeRight</div>
		</h2>
		<p>{$LL.ARTICLE_16()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>17.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />HumanityRight</div>
		</h2>
		<p>{$LL.ARTICLE_17()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>18.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />FreedomOfThought</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />FreedomOfConscience</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />FreedomOfReligion</div>
		</h2>

		<p>{$LL.ARTICLE_18()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>19.</span>

			<div class="row"><img class="hash" src={Hash} alt="Peace" />FreedomOfOpinion</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />OpinionExpresion</div>
		</h2>
		<p>{$LL.ARTICLE_19()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>20.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />AssociationFreedom</div>
		</h2>
		<p>{$LL.ARTICLE_20()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>21.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />GovernanceParticipation</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />PublicServices</div>
		</h2>
		<p>{$LL.ARTICLE_21()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>22.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />SocialServices</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />CulturalRights</div>
		</h2>
		<p>{$LL.ARTICLE_22()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>23.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />FreedomOfEmployment</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />SalaryEquality</div>
		</h2>
		<p>{$LL.ARTICLE_23()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>24.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />RestAndLeisure</div>
		</h2>
		<p>{$LL.ARTICLE_24()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>25.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />DifficultCircumstances</div>
		</h2>
		<p>{$LL.ARTICLE_25()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>26.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />EducationRight</div>
		</h2>
		<p>{$LL.ARTICLE_26()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>27.</span>
			<div class="row">
				<div class="row"><img class="hash" src={Hash} alt="Peace" />CulturalRights</div>
			</div>
		</h2>
		<p>{$LL.ARTICLE_27()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>28.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />SocialLife</div>
		</h2>
		<p>{$LL.ARTICLE_28()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>29.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />SocietyDuties</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />Moral</div>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />Respect</div>
		</h2>
		<p>{$LL.ARTICLE_29()}</p>

		<h2>
			{$LL.ARTICLE_TITLE()} <span>30.</span>
			<div class="row"><img class="hash" src={Hash} alt="Peace" />DeclarationStability</div>
		</h2>
		<p>{$LL.ARTICLE_30()}</p>
	</div>
	<br /><br /><br />
	<br />

	<center>
		<p><i>{$LL.ARISTOTELE_2()}</i></p>
		<i>{$LL.ARISTOTELE_NAME()}</i>
	</center>
	<div class="stop-wartism-baner">
		<img class="stopTheWartism" src={STW} alt="stopTheWartism" />
	</div>
	<div class="hashtag-baner">
		#HumanRights #StandUp4HumanRights #EqualityForAll #JusticeForAll #EndDiscrimination
		#DignityForAll #WomensRights #StopGenderViolence #Pride #StopRacism
	</div>
	<img class="imageUrl1" src={imageUrl1} alt="Peace" />
	<img class="imageUrl2" src={imageUrl2} alt="Peace" />
	<img class="imageUrl3" src={imageUrl3} alt="Peace" />
	<img class="imageUrl5" src={imageUrl5} alt="Peace" />
	<img class="imageUrl6" src={imageUrl6} alt="Peace" />

	<slot />
</div>

<style>
	.row {
		display: flex;
	}
	main {
		margin-left: 60px;
	}
	@media (max-width: 900px) {
		.slogan {
			display: none;
		}

		.box {
			padding-left: 5vw;
		}
	}

	.stopTheWartism {
		width: 260px;
	}

	.hashtag-baner {
		text-transform: uppercase;
		padding: 1rem;
		padding-top: 3rem;
		border: 2px solid #cb2f74;
		justify-content: center;
		display: flex;
		border-radius: 0.6rem;
		font-weight: 600;
		justify-content: center;
		display: flex;
		margin-bottom: 5rem;
		background: #f7f7f7;
		text-align: center;
	}

	.stop-wartism-baner {
		font-weight: 600;
		text-transform: uppercase;
		transform: translateY(30%);
		border-radius: 0.6rem;
		width: 30%;
		min-width: 280px;
		max-width: 600px;
		margin: auto;
		font-size: 2rem;
		padding: 1rem;
		margin-top: 5rem;
		background: #f7f7f7;
		border: 2px solid #cb2f74;
		color: white;
		justify-content: center;
		display: flex;
	}
	.hash {
		width: 21px;
		height: 21px;
		margin: 0;
	}
	i {
		font-size: 0.8rem;
	}

	h2 {
		font-size: 18px;
		position: relative;
		display: flex;
		flex-wrap: wrap;
		min-width: 60px;
	}

	span {
		position: absolute;
		top: -16px;
		left: -60px;
		font-size: 40px;
		opacity: 0.2;
		min-width: 60px;
		text-align: right;
	}

	.imageUrl1 {
		position: fixed;
		bottom: 20%;
		opacity: 0.071;
		z-index: -1;
		right: 0;
		width: 20vw;
	}
	.imageUrl2 {
		position: fixed;
		top: 20%;
		opacity: 0.071;
		z-index: -1;
		right: 22vw;
		width: 20vw;
	}

	.imageUrl3 {
		position: fixed;
		top: 20%;
		opacity: 0.071;
		z-index: -1;
		left: 0;
		top: -5%;
		width: 20vw;
	}
	.imageUrl5 {
		position: fixed;
		opacity: 0.071;
		z-index: -1;
		width: 20vw;
		right: -5vw;
		top: -7vw;
	}

	.imageUrl6 {
		position: fixed;
		opacity: 0.071;
		z-index: -1;
		width: 20vw;
		left: 10vw;
		bottom: 5vw;
	}

	@media (max-width: 900px) {
		.imageUrl1 {
			position: fixed;
			bottom: 52%;
			opacity: 0.071;
			z-index: -1;
			right: 65%;
			width: 30vw;
		}
		.imageUrl2 {
			position: fixed;
			top: 62%;
			opacity: 0.121;
			z-index: -1;
			right: 2vw;
			width: 20vw;
		}

		.imageUrl3 {
			position: fixed;
			top: -63%;
			opacity: 0.121;
			z-index: -1;
			left: -2%;
			top: 9%;
			width: 30vw;
		}
		.imageUrl5 {
			position: fixed;
			opacity: 0.121;
			z-index: -1;
			width: 30vw;
			right: -11vw;
			top: 12vw;
		}

		.imageUrl6 {
			position: fixed;
			opacity: 0.121;
			z-index: -1;
			width: 25vw;
			left: 10vw;
			bottom: 5vw;
		}
	}

	details {
		cursor: pointer;
	}

	.slogan {
		opacity: 0.1;
		position: fixed;
		left: -47vw;
		top: 42vh;
		width: 100vw;
		rotate: 270deg;
		font-size: 6vh;
		font-weight: 700;
		font-style: italic;
		color: #010101;
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	@media (max-width: 900px) {
		h2 {
			flex-direction: column;
			align-items: center;
		}

		span {
			top: -25px;
			left: -12vw;
			font-size: 62px;
		}
	}
</style>
