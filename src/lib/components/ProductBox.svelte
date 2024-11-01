<script>
	export let id;
	export let image;
	export let description;
	export let price;
</script>

<a class="product" href={`/product/${id}`}>
	<img src={image} alt={description} class="image" />
	<p class="details">{description}</p>
	<p class="price">{price}$</p>
</a>

<style>
	.product {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		color: inherit;
	}

	.image {
		width: 435px;
		height: 435px;
		object-fit: cover;
	}

	.details {
		margin-top: 10px;
		font-size: 16px;
	}

	.price {
		margin-top: 5px;
		font-size: 18px;
		font-weight: bold;
	}
</style>
