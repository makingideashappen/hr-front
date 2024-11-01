<script>
    export let type = "button";
    export let disabled = false;
    export let onClick = () => {};
    export let className = "";
  </script>
  
  <button 
    type={type}
    disabled={disabled}
    class={className}
    on:click={onClick}
  >
    <slot></slot>
  </button>
  
  <style>
    button {
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
    /* Default styling, can be customized via className */
    .primary {
      background-color: #007bff;
      color: white;
    }
    .secondary {
      background-color: #6c757d;
      color: white;
    }
    .success {
      background-color: #28a745;
      color: white;
    }
    .danger {
      background-color: #dc3545;
      color: white;
    }
    /* Hover effects */
    button:hover:not(:disabled) {
      opacity: 0.8;
    }
  </style>

  <script>
    import Button from './Button.svelte';
  
    function handleClick() {
      alert('Button clicked!');
    }
  </script>
  
  <main>
    <h1>Svelte Button Component</h1>
    
    <Button 
      type="button" 
      className="primary" 
      on:click={handleClick}
    >
      Primary Button
    </Button>
  
    <Button 
      type="button" 
      className="secondary"
      on:click={handleClick}
    >
      Secondary Button
    </Button>
  
    <Button 
      type="submit" 
      className="success"
    >
      Submit Button
    </Button>
  
    <Button 
      type="button" 
      className="danger" 
      disabled={true}
    >
      Disabled Button
    </Button>
  </main>
  
  <style>
    main {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    h1 {
      margin-bottom: 20px;
    }
    Button {
      margin: 10px;
    }
  </style>