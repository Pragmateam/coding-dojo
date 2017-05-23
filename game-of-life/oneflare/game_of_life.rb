# frozen_string_literal: true

class Cell
  attr_reader :dead

  def initialize(neighbors:, dead: false)
    @neighbors = neighbors
    @dead = dead
  end

  def travel_to_next_generation
    if @neighbors < 2
      @dead = true
      return :underpopulation
    elsif @neighbors > 3
      @dead = true
      return :overpopulation
    else
      @dead = false
    end
  end

  def dead?
    @dead
  end
end

describe Cell do
  describe '#travel_to_next_generation' do
    it 'dies when cell has fewer than two live neighbours by underpopulation.' do
      cell = Cell.new(neighbors: 1)

      expect(cell.dead?).to eq(false)

      expect(cell.travel_to_next_generation).to eq(:underpopulation)
      expect(cell.dead?).to eq(true)
    end

    it 'lives when cell has two live neighbours lives on to the next generation.' do
      cell = Cell.new(neighbors: 2)

      expect(cell.dead?).to eq(false)

      expect(cell.travel_to_next_generation).to eq(false)

      expect(cell.dead?).to eq(false)
    end

    it 'lives when cell has three live neighbours lives on to the next generation.' do
      cell = Cell.new(neighbors: 3)

      expect(cell.dead?).to eq(false)

      cell.travel_to_next_generation

      expect(cell.dead?).to eq(false)
    end

    it 'Any live cell with more than three live neighbours dies, as if by overpopulation' do
      cell = Cell.new(neighbors: 4)

      expect(cell.dead?).to eq(false)

      expect(cell.travel_to_next_generation).to eq(:overpopulation)

      expect(cell.dead?).to eq(true)
    end

    it 'Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction' do
      cell = Cell.new(neighbors: 3, dead: true)

      expect(cell.dead?).to eq(true)

      cell.travel_to_next_generation

      expect(cell.dead?).to eq(false)
    end
  end
end
