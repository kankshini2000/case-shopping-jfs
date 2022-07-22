package com.shop.cart.model;

public class Item {
    private Product product;
	private int quantity;
	@SuppressWarnings("unused")
	
    private double subTotal;

	public Item() {
		super();
	}

	public Item(Product product, int quantity) {
		super();
		this.product = product;
		this.quantity = quantity;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public void setSubTotal() {
		this.subTotal = product.getPrice() * quantity;
	}

	public double getSubTotal() {
		return product.getPrice() * quantity;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
}
